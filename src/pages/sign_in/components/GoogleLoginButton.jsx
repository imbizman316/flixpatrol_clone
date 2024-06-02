import React from "react";

import { useGoogleLogin } from "@react-oauth/google";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";

function GoogleLoginButton() {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <button
      className="flex flex-row justify-center items-center w-[200px] border-[1px] gap-2 hover:bg-gray-500 duration-100 cursor-pointer"
      onClick={() => login()}
    >
      <FaGoogle />
      <h1>Google</h1>
    </button>
  );
}

export default GoogleLoginButton;
