import { useCartContext } from "../../context/CartContext"


function Cart() {

    const { cartList, borrarCarrito } = useCartContext()
    return (
        <div>
            { cartList.map(prod => <div><img src={prod.foto} alt='' className='img-fluid' width= '10%' />{prod.cake}  {prod.cantidad} {`$${prod.precio}`}</div>)} 
            <button onClick={borrarCarrito}>Vaciar carrito </button>
        </div>
    )
}

export default Cart
