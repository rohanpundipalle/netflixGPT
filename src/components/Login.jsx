import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <Header />
      <div className="absolute h-full w-full">
        <img
          className="object-cover w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg"
          alt="Netflix_Background"
        />
      </div>
      <div className="backdrop-brightness-30 absolute w-full h-full"></div>
      <form className="p-12 absolute w-100 my-36 mx-auto right-0 left-0 text-white backdrop-brightness-40">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-3 w-full border-gray-400 border-1 rounded-sm"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile Number"
          className="p-4 my-3 w-full border-gray-400 border-1 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full border-gray-400 border-1 rounded-sm"
        />
        <button className="p-2 my-2 bg-red-700 w-full rounded-xs">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-gray-400 font-light">
          {isSignInForm ? "New to Netflix?" : "Already registered?"}
          <span
            onClick={toggleSignInForm}
            className="text-white font-medium cursor-pointer"
          >
            {isSignInForm ? "Sign Up Now." : "Sign In Now."}
          </span>
        </p>
      </form>
    </>
  );
};

export default Login;
