import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider( {children} ) {
    const [cartList , setCartList ] = useState([])
    const [cartLength,setTotalItems] = useState();

    useEffect(()=>{

      let totItems = 0;
      for(let cartItem of cartList) {
          totItems += cartItem.cantidad;
      }

      setTotalItems(totItems);

  },[cartList])

    function agregarAlCarrito(item) {
      
      const index = cartList.findIndex(i => i.id === item.id)
      
      
      if (index > -1) {
 
        const located = cartList[index].cantidad

        cartList.splice(index, 1)

        setCartList([...cartList, { ...item, cantidad: item.cantidad + located, precio: item.precio}])

      }else {
        setCartList([...cartList, {...item, precio: item.precio}])
      }
    
    }
    function borrarCarrito() {
      setCartList([])
    }
    const removeItem = (itemId) =>{
      const newCart = cartList.filter(item => item.id !== itemId)
      setCartList(newCart)
  }
  function totalPrice() {
    return cartList.map(prod =>prod.cantidad * prod.precio).reduce((a,b)=>a+b)
  }
    
    return (
       <CartContext.Provider value={ {
          cartList,
          cartLength,
          agregarAlCarrito,
          borrarCarrito,
          removeItem,
          totalPrice
       }}>
            { children }
       </CartContext.Provider>
    )
}

export default CartContextProvider
