import MiniCart from 'cart/MiniCart';
import Login from 'cart/Login';

const Header = () => {
  return (
    <header className="p-5 bg-blue-500 text-white text-3xl font-bold w-full flex justify-between">
      <h2>*** SPINNER WORLD ***</h2>
      <div className="relative">
        <MiniCart />
        <Login />
      </div>
    </header>
  );
};

export default Header;
