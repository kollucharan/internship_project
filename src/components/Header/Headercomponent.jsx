import { Link } from "react-router-dom";

import SearchComponent from "../search/searchcomponent";

function HeaderComponent({ searchvalue, Setsearchvalue ,Setcountincart,countincart }) {

    function cartclicked(){
        Setcountincart(0);
    }
  
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <Link to="/" onClick={()=>{setstatevalue('')}}>Home</Link>
          <span style={{ marginLeft: 18 }}>
           
            <Link to="/contactus"> ContactUs </Link>
          </span>
        </div>
        <Link to="/cart">
          
          <img onClick={()=>{cartclicked()}}
            style={{ width: 35, height: 35 }}
            src="https://cdn-icons-png.freepik.com/512/7835/7835563.png "
            alt="carticon"
          />
      <span>{countincart}</span>
      
        </Link>
       
        <div>
          <SearchComponent
            searchvalue={searchvalue}
            Setsearchvalue={Setsearchvalue}
          />
        </div>
      </div>
    </div>
  );
}
export default HeaderComponent;