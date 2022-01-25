import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import Form from "../Form/Form"
import TableCart from "../TableCart/TableCart"
import "./Cart.css"


function Cart() {

const { cartList, removeCart, totalPrice, removeItem} = useCartContext([])


    return (
        <> 
            <TableCart cartOrder={cartList} itemRemove={removeItem} />
            { !cartList.length ? (
                <div className="totalContainer"><h3 className="totalPrice">Tu carrito esta vacio</h3>
                <Link to="/"><button className="btn btnItem btn-outline-primary btn-block totalPrice">Seleccionar Productos</button></Link>
                </div>)
                :  (<div className="totalContainer"><h3 className="totalPrice">Total: ${totalPrice()}</h3></div>)}
                    
                <div className="d-flex justify-content-center align-items-center"><button className="btn btnItem btn-outline-primary btn-block   removeCartStyle"  disabled={!cartList.length} onClick={removeCart}>Vaciar carrito</button></div>     
            <Form removeCart={removeCart} totalPrice={totalPrice}/>
        </>
    )
}

export default Cart
 