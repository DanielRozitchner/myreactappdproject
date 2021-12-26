import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount"


function ItemDetail({ item }) {
  
  const [goCart, setGoCart] = useState(false); 

  const { cartList, agregarAlCarrito }= useCartContext()

  const onAdd = (quantityToAdd) => {
    setGoCart(true); 
    agregarAlCarrito({...item, cantidad: quantityToAdd})
  }
console.log(cartList)
  return (
    <div
      key={item.id}
            className='col-md-4'
                                        >
                <div className="card w-100 mt-5" >
                    <div className="card-header">
                        {`${item.cake}`}
                    </div>
                    <div className="card-body">
                        <img src={item.foto} alt='' className='w-50' />
                            {item.detalle}
                            {`$${item.precio}`}
                    </div>
                    <div className="card-footer">
                    {!goCart ? (<ItemCount stock={item.stock} onAdd={onAdd} />
                    )
                    : (<Link to="/cart"><button className="btn btn-outline-primary btn-block">Terminar compra</button></Link>
                    )}
                   
                    </div>
                </div>
    </div>
  )
}

export default ItemDetail
