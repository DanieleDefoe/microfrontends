import { createEffect, createSignal, Show } from 'solid-js';

import { jwt, addToCart } from 'cart/cart';

const AddToCart = ({ id }) => {
  const [loggedIn, setLoggedIn] = createSignal(false);

  createEffect(() => {
    return jwt.subscribe((value) => setLoggedIn(Boolean(value)));
  });

  return (
    <Show when={loggedIn()}>
      <button
        onClick={() => addToCart(id)}
        class="bg-red-800 text-white py-2 px-5 rounded-md text-lg"
      >
        Add to Cart
      </button>
    </Show>
  );
};

export default AddToCart;
