import { useCartContext } from "../../context/CartContext"


function Cart() {

    const { cartList, borrarCarrito } = useCartContext()
    return (
        <div>
            { cartList.map(prod => <div>{prod.cake} {prod.cantidad} {`$${prod.precio}`}</div>)} 
            <button onClick={borrarCarrito}>Vaciar carrito </button>
        </div>
    )
}

export default Cart
