import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import Form from "../Form/Form"
import TableCart from "../TableCart/TableCart"


function Cart() {

const { cartList, removeCart, totalPrice, removeItem} = useCartContext([])


    return (
        <> 
            <TableCart cartOrder={cartList} itemRemove={removeItem} />
            { !cartList.length ? (
                <div><h3>tu carrito esta vacio</h3>
                <Link to="/"><button className="btn btn-outline-primary btn-block">Seleccionar Productos</button></Link>
                </div>)
                :  (<div><h3>Total: ${totalPrice()}</h3></div>)}
                    
                <button className="btn btn-outline-primary btn-block"  disabled={!cartList.length} onClick={removeCart}>Vaciar carrito</button>        
            <Form removeCart={removeCart} totalPrice={totalPrice}/>
        </>
    )
}

export default Cart
 