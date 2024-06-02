import React from "react";
import GoogleLoginButton from "../sign_in/components/GoogleLoginButton";
import FBLoginButton from "../sign_in/components/FBLoginButton";
import { Link } from "react-router-dom";
import SubscriptionContainer from "../sign_in/components/SubscriptionContainer";

function SignUp() {
  return (
    <div className="bg-gray-800 text-white min-h-screen p-10">
      <h1 className="text-3xl mb-[20px]">Sign up to FlixPatrol</h1>
      <p className=" mb-[50px]">
        Join FlixPatrol and become a Pro or Premium user with a lot of advanced
        features.
      </p>
      <div className="flex flex-row gap-20 justify-center mb-10">
        <div
          name="sign-in-box"
          className="bg-gray-700 min-w-[480px] flex flex-col p-3 rounded-sm"
        >
          <p className="mb-3">Enter your e-mail address and password.</p>
          <form>
            {" "}
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <input
                  className="mb-2 bg-gray-800 p-1 border-[1px] rounded-sm border-gray-400 w-[48%]"
                  placeholder="first name"
                />
                <input
                  className="mb-2 bg-gray-800 p-1 border-[1px] rounded-sm border-gray-400 w-[48%]"
                  placeholder="last name"
                />
              </div>
              <input
                className="mb-2 bg-gray-800 p-1 border-[1px] rounded-sm border-gray-400"
                type="text"
                placeholder="you@example.com"
              />
              <input
                className="mb-3 bg-gray-800 p-1 border-[1px] rounded-sm border-gray-400"
                type="text"
                placeholder="password"
              />
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2">
                <h1 className="text-sm line-clamp-2 w-[60%]">
                  By signing up you agree that you have read and accepted Terms
                  and Conditions and Privacy Policy
                </h1>
              </div>
              <button className="btn bg-blue-600 text-gray-100 hover:bg-blue-500 px-3 py-1 text-sm rounded-sm">
                Sign in
              </button>
            </div>
          </form>
        </div>
        <div>
          <div
            name="sign_social"
            className="bg-gray-700 min-w-[480px] flex flex-col p-3 rounded-sm h-[100px]"
          >
            <p className="mb-3">Create an account using socials</p>
            <div className="flex flex-row justify-between">
              <FBLoginButton />
              <GoogleLoginButton />
            </div>
          </div>
          <div className="flex flex-row justify-center gap-5 items-center mt-5">
            <Link>Already have login and password? Sign-in!</Link>
          </div>
        </div>
      </div>
      <hr className="dashed w-[100%]" />
      <SubscriptionContainer />
    </div>
  );
}

export default SignUp;
