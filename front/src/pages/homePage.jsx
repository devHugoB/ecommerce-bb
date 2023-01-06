import React from 'react';

const HomePage = () => {
  return (
    <>
      <h1 className="title">Nos produits</h1>
      <hr className="separation" />

      <div className="products__list">
        <div className="product">
          <img src="https://randomuser.me/api/portraits/men/82.jpg" alt="description" className="product__img"/>
          <h2 className="product__title">Produit</h2>
          <span className="product__category">Catégorie 1</span>
          <p className="product__price">19,99€</p>
        </div>
        <div className="product">
          <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="description" className="product__img"/>
          <h2 className="product__title">Produit</h2>
          <span className="product__category">Catégorie 2</span>
          <p className="product__price">19,99€</p>
        </div>
        <div className="product">
          <img src="https://randomuser.me/api/portraits/men/17.jpg" alt="description" className="product__img"/>
          <h2 className="product__title">Produit</h2>
          <span className="product__category">Catégorie 3</span>
          <p className="product__price">19,99€</p>
        </div>
        <div className="product">
          <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="description" className="product__img"/>
          <h2 className="product__title">Produit</h2>
          <span className="product__category">Catégorie 4</span>
          <p className="product__price">19,99€</p>
        </div>
        <div className="product">
          <img src="https://randomuser.me/api/portraits/men/66.jpg" alt="description" className="product__img"/>
          <h2 className="product__title">Produit</h2>
          <span className="product__category">Catégorie 5</span>
          <p className="product__price">19,99€</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
