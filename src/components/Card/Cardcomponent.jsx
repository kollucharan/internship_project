import { useQuery, gql } from "@apollo/client";
import ProductComponent from "../product/ProductComponent";
import { Link } from "react-router-dom";

const QUERY_TOGET_DATA = gql`
  query {
    products {
      id
      name
      price
      image_url
    }
  }
`;
function CardComponent(props) {
  const {
    searchvalue,
    Setcountincart,
    countincart,
    detailsincart,
    Setdetailsincart,
  } = props;
  // const [productsdata, setProductsData] = useState([]);
  const { data, loading, error } = useQuery(QUERY_TOGET_DATA);

  // useEffect(() => {
  //     if (data) {
  //         setProductsData(data.products);
  //     }
  // }, [data]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error?.message}</p>;

  function Addtocart(product) {
    console.log("detailsincart")
    Setcountincart((prev) => prev + 1);
    Setdetailsincart((pre) => [
      ...pre,
      {
        id: product.id,
      },
    ]);
    console.log(detailsincart)
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {data?.products
          ?.filter((product) =>
            product.name.toLowerCase().includes(searchvalue.toLowerCase())
          ) // Step 1: Filter the data
          .map(
            (
              product // Step 2: Render the filtered data
            ) => (
              <div key={product.id} style={{ margin: 20 }}>
                <div>
                  <Link to={`product/${product.id}`}>
                    <img
                      style={{ width: 100, height: 100, cursor: "pointer" }}
                      src={product.image_url}
                      alt={product.name}
                    />
                  </Link>
                </div>
                <div>
                  <span> Rs.{product.price}</span>
                </div>

                <div>
                  <span>{product.name}</span>
                </div>

                <div>
                  <button
                    onClick={() => {
                      Addtocart(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
}

export default CardComponent;
