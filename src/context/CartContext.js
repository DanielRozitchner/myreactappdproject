import { createContext, useState, useContext } from 'react';

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider( {children} ) {
    const [cartList , setCartList ] = useState([])

    function agregarAlCarrito(item) {
      
      const index = cartList.findIndex(i => i.id === item.id)
      
      if (index > -1) {
 
        const located = cartList[index].cantidad

        cartList.splice(index, 1)

        setCartList([...cartList, { ...item, cantidad: item.cantidad + located, precio: (item.precio * located) + (item.precio * item.cantidad)}])

      }else {
        setCartList([...cartList, {...item, precio: item.precio * item.cantidad}])
      }
    
    }
    function borrarCarrito() {
      setCartList([])
    }
    return (
       <CartContext.Provider value={ {
          cartList,
          agregarAlCarrito,
          borrarCarrito
       }}>
            { children }
       </CartContext.Provider>
    )
}

export default CartContextProvider
