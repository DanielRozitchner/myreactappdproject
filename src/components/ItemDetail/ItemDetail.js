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
    <div className="d-flex flex-column align-items-center">
      <div
        key={item.id}
            className='col-md-4 '
                                        >
                <div className="card w-100 mt-5" >
                    <div className="card-header">
                        {`${item.cake}`}
                    </div>
                    <div className="card-body d-flex flex-column align-items-center">
                        <img src={item.foto} alt='' className='w-50' />
                            <p>{item.detalle}</p>
                            <h4>Precio:${item.precio}</h4>
                    </div>
                    <div className="card-footer d-flex flex-column align-items-center">
                    {!goCart ? (<ItemCount stock={item.stock} onAdd={onAdd} />
                    )
                    : (<Link to="/cart"><button className="btn btn-outline-primary btn-block">Ir al carrito</button></Link>
                    )}
                   
                    </div>
                </div>
      </div>
    </div>
  )
}

export default ItemDetail
