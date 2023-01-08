import React from 'react';
import {useNavigate} from "react-router";

const ProductItem = ({product: {id, photo, name, cat_id, cat_name, price}}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/produit/${id}`)
  }

  return (
    <div className="product" onClick={handleClick}>
      <img src="https://randomuser.me/api/portraits/men/82.jpg" alt="description" className="product__img"/>
      <h2 className="product__title">{name}</h2>
      <span className="product__category">{cat_name}</span>
      <p className="product__price">{price}€</p>
    </div>
  );
};

export default ProductItem;
