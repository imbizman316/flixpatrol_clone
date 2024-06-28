import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../context";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TopMoviesBox() {
  const { topMovies, mediaType, setPage, page, polishHundMovies } =
    useContext(GlobalContext);

  const [splitHundMovies, setSplitHundMovies] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const numberOneMovieImage =
    topMovies && topMovies.length && topMovies[0].poster_path;
  const IMG_PATH = "https://image.tmdb.org/t/p/original";
  const top10Movies = topMovies && topMovies.length && topMovies.slice(0, 10);
  const topMovieTitle =
    topMovies && topMovies.length && topMovies[0].title | "";

  useEffect(() => {
    const temp = [];

    async function getTemp() {
      for (let i = 0; i < 10; i++) {
        polishHundMovies &&
          polishHundMovies.length &&
          temp.push(polishHundMovies.slice(i * 10, i * 10 + 10));
      }
      return temp;
    }

    getTemp().then(setSplitHundMovies(temp));
  }, [polishHundMovies]);

  // console.log(splitHundMovies);

  return (
    <div className="w-[200px] flex flex-col items-center justify-center bg-gray-900 p-2 relative hover:outline-2 hover:outline">
      <div className="flex flex-col justify-center items-center h-[70px]">
        <h1>{mediaType === "movie" ? "TOP MOVIES" : "TOP TV SHOWS"}</h1>
      </div>
      <img
        className="absolute top-20 h-[260px] w-[100%] object-cover"
        src={IMG_PATH + numberOneMovieImage}
        alt={topMovieTitle}
      />
      {/* <div className="mt-[300px]">
        {top10Movies &&
          top10Movies.length &&
          top10Movies.map((movie, index) => (
            <div key={index} className="flex flex-row gap-2">
              <h1 className="overflow-hidden">{index + 1 + (page - 1) * 10}</h1>
              <Link
                to={
                  mediaType === "movie"
                    ? `/movie/${movie.id}`
                    : `/tv/${movie.id}`
                }
                className="text-gray-400 hover:text-white hover:underline"
              >
                {mediaType === "movie" ? movie.title : movie.name}
              </Link>
            </div>
          ))}
      </div> */}
      <div className="text-white w-[100%] h-[100%] flex flex-col">
        <Slider {...settings}>
          {splitHundMovies?.map((movies) => (
            <div>
              {movies.map((movie, index) => (
                <div>
                  {index}. {movie.title}
                </div>
              ))}
            </div>
          ))}
        </Slider>
      </div>
      {/* <div className="text-white w-[70%]">
        <Slider {...settings}>
          {top10Movies &&
            top10Movies.length &&
            top10Movies.map((option) => <div>{option.title}</div>)}
        </Slider>
      </div> */}
      <div className="flex flex-row w-[100%] justify-between">
        <button
          onClick={() => {
            page > 1 && setPage(page - 1);
          }}
        >
          Go Left
        </button>
        <button onClick={() => setPage(page + 1)}>Go Right</button>
      </div>
    </div>
  );
}

export default TopMoviesBox;
