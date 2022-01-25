import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider( {children} ) {
    const [cartList , setCartList ] = useState([])
    const [cartLength,setTotalItems] = useState();

    useEffect(()=>{

      let totItems = 0;
      for(let cartItem of cartList) {
          totItems += cartItem.quantity;
      }

      setTotalItems(totItems);

  },[cartList])

    function addToCart(item) {
      
      const index = cartList.findIndex(i => i.id === item.id)
      
      
      if (index > -1) {

      const located = cartList[index].quantity

        cartList.splice(index, 1)

        setCartList([...cartList, { ...item, quantity: item.quantity + located, price: item.price}])

      }else {
        setCartList([...cartList, {...item, price: item.price}])
      }
    
    }
    
    function removeCart() {
      setCartList([])
    }
    
    const removeItem = (itemId) =>{
      const newCart = cartList.filter(item => item.id !== itemId)
      setCartList(newCart)
    }
  
    function totalPrice() {
      return cartList.map(prod =>prod.quantity * prod.price).reduce((a,b)=>a+b)
    }
    
    return (
      <CartContext.Provider value={ {
          cartList,
          cartLength,
          addToCart,
          removeCart,
          removeItem,
          totalPrice
      }}>
            { children }
      </CartContext.Provider>
    )
}

export default CartContextProvider
