import React from 'react';
import {CartInformation, CartList} from "../components";

const CartPage = () => {
  return (
    <>
      <h1 className="title">Mon panier</h1>
      <CartList />
      <CartInformation />
    </>
  );
};

export default CartPage;
