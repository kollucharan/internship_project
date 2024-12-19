import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Link, Route } from "react-router-dom";

import HomeComponent from "../src/components/Home/Home";
import ContactUs from "./components/contactus/contactuscomponent";
import ProductComponent from "./components/product/ProductComponent";
import CartComponent from "./components/Cart/Cartcomponent";

function App() {
  const [searchvalue, Setsearchvalue] = useState("");
  const [countincart,Setcountincart] =useState(0);
  const [detailsincart,Setdetailsincart] =useState([])

  // const onSearch = (val) => {
  //   Setsearchvalue(val);
  // };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomeComponent searchvalue={searchvalue} Setsearchvalue={Setsearchvalue} countincart={countincart} Setcountincart={Setcountincart} detailsincart={detailsincart} Setdetailsincart={Setdetailsincart} />
        }
      />
      <Route path="/Contactus" element={<ContactUs />} />
      <Route path="Product/:id" element={<ProductComponent />} />
      <Route path="/cart" element={<CartComponent detailsincart={detailsincart} Setdetailsincart={Setdetailsincart} />} />
    </Routes>
  );
}

export default App;
