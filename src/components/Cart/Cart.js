import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function Cart() {

    const { cartList } = useContext(CartContext)
    return (
        <div>
           cart 
        </div>
    )
}

export default Cart
