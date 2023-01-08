import React from 'react';

const ProductDetails = ({product: {id, photo, name, description, cat_id, cat_name, price}}) => {
  return (
    <div>
      {name}
    </div>
  );
};

export default ProductDetails;
