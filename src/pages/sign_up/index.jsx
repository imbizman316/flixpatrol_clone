import React from "react";
import GoogleLoginButton from "../sign_in/components/GoogleLoginButton";
import FBLoginButton from "../sign_in/components/FBLoginButton";
import { Link } from "react-router-dom";
import SubscriptionContainer from "../sign_in/components/SubscriptionContainer";
import SignUpBox from "./components/SignUpBox";

function SignUp() {
  return (
    <div className="bg-gray-800 text-white min-h-screen p-10 min-w-full flex flex-col items-start">
      <h1 className="text-3xl mb-[20px]">Sign up to FlixPatrol</h1>
      <p className=" mb-[50px]">
        Join FlixPatrol and become a Pro or Premium user with a lot of advanced
        features.
      </p>
      <div className="flex flex-row gap-20 justify-center mb-10">
        <SignUpBox />
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
