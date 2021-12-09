import { useState, useEffect } from "react";
import  getOneProduct  from "../helpers/getOneProduct";
import  ItemDetail  from "../ItemDetail/ItemDetail"; 


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    console.log("detailcontainer", item);

    useEffect(() => {
        getOneProduct.then((res) => setItem(res)).catch((err) => console.log(err));
      });
      return (
        <div>
          <ItemDetail item={item} />
        </div>
      );
    
    }

export default ItemDetailContainer
