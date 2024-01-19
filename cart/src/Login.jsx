import { useState } from 'react';
import { login, useLoggedIn } from './cart';

const Login = () => {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState('sally');
  const [password, setPassword] = useState('123');

  if (loggedIn) return null;

  return (
    <>
      <span onClick={() => setShowLogin((prev) => !prev)}>
        <i className="ri-fingerprint-line text-2xl" id="showlogin" />
      </span>
      {showLogin && (
        <div
          className="absolute p-5 border-4 border-blue-800 bg-white rounded-md flex flex-col gap-3 text-black"
          style={{ width: 300, top: '2rem', left: -250 }}
        >
          <input
            type="text"
            placeholder="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border text-sm border-gray-400 p-2 w-full rounded-md"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border text-sm border-gray-400 p-2 w-full rounded-md"
          />
          <button
            id="loginbtn"
            onClick={() => login(username, password)}
            className="bg-green-900 text-white py-2 px-5 rounded-md text-sm"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
