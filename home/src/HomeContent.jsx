import { useState, useEffect } from 'react';
import { currency, getProducts } from './products';

import { addToCart, useLoggedIn } from 'cart/cart';

const HomeContent = () => {
  const loggedIn = useLoggedIn();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="my-10 grid grid-cols-4 gap-5">
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} loading="lazy" alt={product.name} />
          <div clasName="flex flex-col gap-2">
            <div className="font-bold text-md justify-between flex">
              <a>{product.name}</a>
              <a className="flex-end">{currency.format(product.price)}</a>
            </div>
            <p className="flex-end">{product.description}</p>
            {loggedIn && (
              <div className="text-right mt-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white rounded-md text-lg p-2"
                  id={`addtocart_${product.id}`}
                  onClick={() => addToCart(product.id)}
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeContent;
