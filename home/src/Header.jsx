import MiniCart from 'cart/MiniCart';
import Login from 'cart/Login';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-5 bg-blue-500 text-white text-3xl font-bold w-full flex justify-between">
      <Link to="/">
        <h2>*** SPINNER WORLD ***</h2>
      </Link>
      <Link id="cart" to="/cart">
        <h2>Cart</h2>
      </Link>
      <div className="relative">
        <MiniCart />
        <Login />
      </div>
    </header>
  );
};

export default Header;
