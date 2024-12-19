import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import React from "react";

// GraphQL Query
const GET_UNIQUE_PRODUCT = gql`
  query MyQuery($id: Int!) {
    products_by_pk(id: $id) {
      name
      price
      image_url
      description
    }
  }
`;

function ProductComponent() {
  const { id } = useParams(); 

  const { data, loading, error } = useQuery(GET_UNIQUE_PRODUCT, {
    variables: { id: parseInt(id) }, // Convert id to integer
  });

 
  if (loading) return <p>Loading...</p>;

  
  if (error) return <p>Error: {error.message}</p>;

 
  if (!data?.products_by_pk) return <p>No product found.</p>;


  const { name, price, image_url, description } = data.products_by_pk;

 
  return (
    <div>
      <h1>Product Details</h1>
      <img src={image_url} alt={name} width="700" />
      <p>Name: {name}</p>
      <p>Price: Rs.{price}</p>
      <p>Description: {description}</p>
    </div>
  );
}

export default ProductComponent;



