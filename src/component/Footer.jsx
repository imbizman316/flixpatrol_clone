import React from "react";

function Footer() {
  return (
    <div className="bg-black flex flex-col justify-center items-center px-28 gap-5 py-10">
      <p className="text-gray-400 text-sm line-clamp-3 ">
        FlixPatrol provides VOD charts and streaming ratings worldwide. You can
        find here all the Netflix charts (Netflix TOP 10 or what is Trending on
        Netflix), iTunes charts, Amazon Prime charts and HBO charts. These movie
        charts are based on the official trending or the most popular movies on
        VOD. We cover the most-watched movies and the most popular TV shows in
        2021. FlixPatrol also offers selected movie analytics for movies
        everyone’s watching or VOD release dates. TOP 10 lists are updated
        daily.
      </p>
      <div className="text-white">
        Contact us for cooperation or API access.
      </div>
      <div className="text-white">Email | Contact form</div>
      <hr className="dashed text-white w-[100%]" />
      <div className="text-white">
        <h1 className="text-center">Made in South Korea with vengeance</h1>
        <h1 className="text-center">
          2024 MikeyLee - About Me | Privacy Policy | Terms & Conditions
        </h1>
      </div>
    </div>
  );
}

export default Footer;
