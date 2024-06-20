import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

function SearchResults() {
  const { id } = useParams();
  const { results, tvResults } = useContext(GlobalContext);
  const IMG_PATH = "https://image.tmdb.org/t/p/w92";

  console.log(tvResults);

  return (
    <div className="min-h-screen bg-gray-700 text-white">
      <h1 className="text-2xl">Search results for "{id}"</h1>
      <div>
        <h1 className="text-3xl">Movies</h1>
        <div className="flex flex-col gap-5">
          {results &&
            results.length &&
            results.map((result, index) => (
              <div className="flex flex-row" key={result.id}>
                <div className="flex flex-row gap-2">
                  <img src={IMG_PATH + result.poster_path} alt={result.title} />
                  <h1>{index + 1}</h1>
                  <Link className="hover:underline" to={`/movie/${result.id}`}>
                    {result.title}
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl">TV Shows</h1>
        <div className="flex flex-col gap-5">
          {tvResults &&
            tvResults.length &&
            tvResults.map((result, index) => (
              <div className="flex flex-row" key={result.id}>
                <div className="flex flex-row gap-2">
                  <img src={IMG_PATH + result.poster_path} alt={result.name} />
                  <h1>{index + 1}</h1>
                  <Link className="hover:underline" to={`/tv/${result.id}`}>
                    {result.name}
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
