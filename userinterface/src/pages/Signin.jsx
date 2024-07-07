/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignInCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="max-w-sm mx-auto my-10 p-6 bg-white rounded-lg shadow-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
      <form>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            placeholder='Email address'
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="password"
            id="password"
            placeholder='Password'
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 mb-5 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={() => handleSignIn()}
        >
          Sign In
        </button>
      </form>

      <button
        type="submit"
        className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
      >
        Continue with google
      </button>

      <div className='text-center m-3'>
        <Link to={'/forgetpassword'} >
          <span className='text-blue-700 text-xs hover:underline'>Forget Password ?</span>
        </Link>
      </div>

      <hr className="my-4 border-gray-600" />

      <div className='text-center'>
        <button
          type="submit"
          className="w-1/2 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Create new account
        </button>
      </div>
    </div>
  );
}

