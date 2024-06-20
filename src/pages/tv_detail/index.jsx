import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import { useParams } from "react-router-dom";

function TvDetailPage() {
  const { getMovieDetail, movieDetail } = useContext(GlobalContext);
  const { id } = useParams();

  const {
    origin_country,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
    genres,
  } = movieDetail;

  const main_genre = genres && genres[0]?.name | "";

  const IMG_PATH = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    getMovieDetail("tv", id);
  }, []);

  console.log(movieDetail);

  return (
    <div className="flex flex-row">
      <img className="w-[200px]" src={IMG_PATH + poster_path} alt={title} />
      <div>
        <h1>
          {title} | {origin_country} | {release_date} | {main_genre}
        </h1>
        <div>{overview}</div>
        <div>{vote_average}</div>
      </div>
    </div>
  );
}

export default TvDetailPage;
