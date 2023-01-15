import React, {useContext, useRef} from 'react';
import {CartContext} from "../../context/CartContext";

const ProductDetails = ({product: {id, photo, name, description, cat_id, cat_name, price}}) => {
  const {addToCart} = useContext(CartContext);
  const qtyRef = useRef();
  const handleClick = () => {
    addToCart({id, qty: qtyRef.current.value})
  }

  return (
    <div className="detail">
      <img src={photo} alt={`Produit : ${name}`} className="detail__photo"/>
      <div className="detail__add">
        <h2 className="detail__name">{name}</h2>
        <h3 className="detail__section">Description :</h3>
        <p className="detail__description">{description}</p>
        <p className="detail__price">{price}€</p>
        <label className="detail__label">
          Quantité : <input ref={qtyRef} type="number" className="detail__input" min="1" step="1" defaultValue="1" />
        </label>
        <button className="detail__button" onClick={handleClick}>Ajouter un panier</button>
      </div>
    </div>
  );
};

export default ProductDetails;
