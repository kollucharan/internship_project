import { useEffect, useState } from "react";
import {gql,useQuery} from '@apollo/client'
import CardComponent from "../Card/Cardcomponent";


const QUERY_TO_GETDATA_BYSERACH =  gql`
 query MyQuery($name:String) {
  products(where: {name: {_eq: $name}}){
    price
    name
    image_url
  }
}
`
function SearchComponent({searchvalue,Setsearchvalue}){
//    const [searchvalue,Setsearchvalue]=useState('');
      const [inputvalue,SetInputValue]=useState('');

      function clickedonsearch(){
        Setsearchvalue(inputvalue);
      }

    return (

    <div>

        <div>
            <input type="text" value={inputvalue}  placeholder="search by product name" onChange={(e)=>SetInputValue(e.target.value)} />
            <button onClick={()=>clickedonsearch()}> search</button>
        </div>
       
       {/* <CardComponent name={searchvalue}/> */}
        </div>
    )
}
export default SearchComponent