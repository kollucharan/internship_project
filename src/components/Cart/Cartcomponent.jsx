import { gql, useQuery } from "@apollo/client";

const GET_PRODUCTS_BY_ID = gql`
  query {
    products {
      id
      name
      price
      image_url
    }
  }
`;

function CartComponent({ detailsincart, Setdetailsincart }) {
  const { data, loading, error } = useQuery(GET_PRODUCTS_BY_ID);
    console.log(data)
  if (loading) return <div>loading</div>;
  if (error) return <div>error is :error</div>;
  const temp = data?.products?.filter((item) => {
    for(let i=0;i<detailsincart.length;++i)
  {  if(item.id === detailsincart?.[i].id)
        return item;
  }});

  return (
    <div>
      {temp.map((item, id) => {
         <div>
          <div>{item.price}</div>
          {/* <div>{item.name}</div>
          <div>image src={item.image_url} alt=""</div> */}
          </div>
      })}
    </div>
  );
}
export default CartComponent;
