import React, {useContext, useEffect, useState} from 'react';
import {CartContext} from "../../context/CartContext";
import {addCommand} from "../../api/product";
import {UserContext} from "../../context/UserContext";
import {checkUserExist} from "../../api/user";
import {useNavigate} from "react-router-dom";

const CartInformation = () => {
  const {cart, eraseCart} = useContext(CartContext);
  const {email} = useContext(UserContext);
  const [price, setPrice] = useState(null);
  const navigate = useNavigate();

  const handleClick = async () => {
    await checkUserExist(email).then(data => {
      const user = data.id
      addCommand(user, cart).then(_ => {
        eraseCart()
        navigate("/profil")
      })
    })
  }

  useEffect(() => {
    if (cart.length > 0) {
      if (cart.length === 1) setPrice(cart[0].price * cart[0].qty)
      else cart.reduce((a, b) => a.price * a.qty + b.price * b.qty)
    }
  }, [cart])

  return (
    <div className="cart-info">
      <p className="cart-info__price">
        <strong>TOTAL :</strong> {price ?? 0}€
      </p>
      <button className="cart-info__validate" onClick={handleClick}>Valider le panier</button>
    </div>
  );
};

export default CartInformation;
