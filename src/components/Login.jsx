import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleFormSubmit = () => {
    const validationMessage = checkValidData(
      emailRef.current.value,
      passwordRef.current.value,
    );
    setErrorMessage(validationMessage);
    console.log("validation", validationMessage, passwordRef);
    if (validationMessage) return;

    if (!isSignInForm) {
      // Sign Up logic here
      console.log(
        "Signing Up with",
        emailRef.current.value,
        passwordRef.current.value,
      );
    } else {
      // Sign In logic here
      console.log(
        "Signing In with",
        emailRef.current.value,
        passwordRef.current.value,
      );
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 absolute w-100 my-36 mx-auto right-0 left-0 text-white backdrop-brightness-40"
      >
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
          ref={emailRef}
          placeholder="Email or mobile Number"
          className="p-4 my-3 w-full border-gray-400 border-1 rounded-sm"
        />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Password"
          className="p-4 my-3 w-full border-gray-400 border-1 rounded-sm"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="p-2 my-2 bg-red-700 w-full rounded-xs"
          onClick={handleFormSubmit}
        >
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
