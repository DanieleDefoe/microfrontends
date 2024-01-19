import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, currency } from 'home/products';

import placeAddToCart from 'addtocart/placeAddToCart';

const PDPContent = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const addToCart = useRef(null);

  useEffect(() => {
    if (addToCart.current) {
      placeAddToCart(addToCart.current, product.id);
    }
  }, [product]);

  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    }
  }, [id]);

  if (!product) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className="flex mt-10">
          <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
          <div className="font-bold text-3xl flex-end">
            {currency.format(product.price)}
          </div>
        </div>
        <div ref={addToCart}></div>
        <div>{product.description}</div>
      </div>
    </div>
  );
};

export default PDPContent;
