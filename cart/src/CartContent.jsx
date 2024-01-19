import { Fragment, useEffect, useState } from 'react';

import { cart, clearCart } from 'cart/cart';
import { currency } from 'home/products';

const CartContent = () => {
  const [items, setItems] = useState([]);

  useEffect(
    () => cart.subscribe((value) => setItems(value?.cartItems ?? [])),
    []
  );

  return (
    <>
      <div className="my-10 grid grid-cols-4 gap-5 w-full">
        {items.map((item) => (
          <Fragment key={item.id}>
            <div>{item.quantity}</div>
            <img src={item.image} alt={item.name} className="w-14" />
            <div>{item.name}</div>
            <div className="text-right">
              {currency.format(item.quantity * item.price)}
            </div>
          </Fragment>
        ))}
        <div></div>
        <div></div>
        <div></div>
        <div className="text-right">
          {currency.format(items.reduce((a, v) => a + v.quantity * v.price, 0))}
        </div>
      </div>
      {items.length > 0 && (
        <div className="flex mb-10 justify-between">
          <div className="flex-grow">
            <button
              id="clearcart"
              className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md text-sm"
              onClick={clearCart}
            >
              Clear cart
            </button>
          </div>
          <div className="flex-end">
            <button
              className="bg-green-800 text-white text-sm py-2 px-5 rounded-md"
              onClick={clearCart}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartContent;
