import React, {useContext} from 'react';
import {CartContext} from "../../context/CartContext";

const CartItem = ({item: {id, photo, name, price, qty}}) => {
  const {deleteFromCart} = useContext(CartContext);
  
  const handleClick = () => {
    deleteFromCart(id)
  }
  
  return (
    <div className="item">
      <img src={photo} alt="" className="item__img"/>
      <h3 className="item__name">{name}</h3>
      <p className="item__price">{price}</p>
      <span className="item__qty">{qty}</span>
      <button className="item__delete" onClick={handleClick}>Supprimer</button>
    </div>
  );
};

export default CartItem;
                                              