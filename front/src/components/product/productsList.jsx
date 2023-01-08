import React, {useEffect, useState} from 'react';
import {getAllProducts} from "../../api/product";
import ProductItem from "./productItem";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const list = await getAllProducts()
      setProducts(list)
    }

    getProducts().then(_ => setLoading(false))
  }, []);


  return (
    <>
      {loading
        ? <div>Chargement...</div>
        : (
          <div className="products__list">
            {products.length > 0
              ? (
                products.map(product => (
                  <ProductItem key={product.id} product={product} />
                ))
              )
              : <div>Liste vide</div>
            }
          </div>
        )
      }
    </>
  );
};

export default ProductsList;
