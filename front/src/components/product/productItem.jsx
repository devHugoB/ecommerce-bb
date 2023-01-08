import React from 'react';

const ProductItem = ({product: {id, image, name, category_id, price}}) => {
  return (
    <div className="product">
      <img src="https://randomuser.me/api/portraits/men/82.jpg" alt="description" className="product__img"/>
      <h2 className="product__title">{name}</h2>
      <span className="product__category">{category_id}</span>
      <p className="product__price">{price}€</p>
    </div>
  );
};

export default ProductItem;
