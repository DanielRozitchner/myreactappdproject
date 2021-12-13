import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../helpers/getFetch";
import  ItemDetail  from "../ItemDetail/ItemDetail"; 


const ItemDetailContainer = () => {
  const {id} = useParams();
    const [item, setItem] = useState({});
  

    useEffect(() => {
      getFetch
        .then(resp => setItem(resp.find(item => item.id === parseInt(id))))
        .catch(err => console.log(err))
    
    
    })
    return (
      <div>
        <ItemDetail item={item} /> 
        </div> 
      )  
  }
export default ItemDetailContainer
