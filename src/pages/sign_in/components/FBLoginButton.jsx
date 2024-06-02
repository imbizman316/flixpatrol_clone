import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
// require("dotenv").config();

console.log(process.env);

function FBLoginButton() {
  const [profile, setProfile] = useState(null);

  return (
    <div>
      <LoginSocialFacebook
        appId={process.env.FACEBOOK_APP_ID}
        onResolve={(response) => {
          console.log(response);
          setProfile(response.data);
        }}
        onReject={(error) => {
          console.log(error);
        }}
      >
        {/* <FacebookLoginButton /> */}

        <button className="flex flex-row justify-center items-center w-[200px] border-[1px] gap-2 hover:bg-gray-500 duration-100 cursor-pointer">
          <FaFacebook />
          <h1>Facebook</h1>
        </button>
      </LoginSocialFacebook>

      {/* {profile ? (
        <div>
          <h1>{profile.name}</h1>
          <img src={profile.picture.data.url} alt={profile.name} />
        </div>
      ) : null} */}
    </div>
  );
}

export default FBLoginButton;
