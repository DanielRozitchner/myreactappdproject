import { useCartContext } from "../../context/CartContext"


function Cart() {

    const { cartList, borrarCarrito } = useCartContext()
    return (
        <div>
            { cartList.map(prod => <li>{prod.cake} {prod.cantidad} {`$${prod.precio}`}</li>)} 
            <button onClick={borrarCarrito}>Vaciar carrito </button>
        </div>
    )
}

export default Cart
