import { createContext, useState } from 'react';

export const CartContext = createContext([])

function CartContextProvider( {children} ) {
    const [cartList , setCartList ] = useState([])

    function agregarAlCarrito(item) {
      setCartList( [...cartList, item] ) 
    }
    return (
       <CartContext.Provider value={ {
           cartList, agregarAlCarrito
       }}>
            { children }
       </CartContext.Provider>
    )
}

export default CartContextProvider
