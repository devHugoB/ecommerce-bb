import React, {createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = props => {
  const [cart, setCart] = useState([]);
  const addToCart = product => setCart(old => [...old, product])
  const deleteFromCart = productId => setCart(old => old.filter(product => product.id !== productId))

  const eraseCart = () => setCart([])

  return (
    <CartContext.Provider value={{cart, addToCart, deleteFromCart, eraseCart}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;