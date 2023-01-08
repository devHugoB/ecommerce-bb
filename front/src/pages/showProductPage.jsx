import React, {useEffect, useState} from 'react';
import {ProductDetails} from "../components";
import {useParams} from "react-router";
import {getProductById} from "../api/product";

const ShowProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async (id) => {
      const item = await getProductById(id)
      setProduct(item)
    }

    getProduct(id).then(_ => setLoading(false));

    return () => {
      setProduct(null)
    };
  }, [id]);


  return (
    <>
      {loading
        ? <div>Chargement...</div>
        : <ProductDetails product={product} />
      }
    </>
  );
};

export default ShowProductPage;
