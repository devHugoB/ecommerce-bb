import React from 'react';
import {ProductsList} from "../components";

const HomePage = () => {
  return (
    <>
      <h1 className="title">Nos produits</h1>
      <hr className="separation" />

      <ProductsList />
    </>
  );
};

export default HomePage;
