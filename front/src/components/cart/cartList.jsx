import React, {useContext} from 'react';
import {CartContext} from "../../context/CartContext";
import CartItem from "./cartItem";

const CartList = () => {
  const {cart} = useContext(CartContext);

  return (
    <div className="cart__list">
      {cart.length > 0
        ? (
          cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))
        )
        : <div>Aucun article n'a été ajouté</div>
      }
    </div>
  );
};

export default CartList;
