import axios from "axios";
// import { application } from "express";
import { createContext, useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export function GlobalState({ children }) {
  const [topMovies, setTopMovies] = useState([]);
  const [results, setResults] = useState([]);
  const [tvResults, setTvResults] = useState([]);
  const [movieDetail, setMovieDetail] = useState({});
  const [mediaType, setMediatType] = useState("movie");
  const [page, setPage] = useState(1);
  const [hundredMovies, setHundredMovies] = useState([]);
  const [polishHundMovies, setPolishHundMovies] = useState([]);

  const navigate = useNavigate();

  async function fetchMovies() {
    const url = `https://api.themoviedb.org/3/discover/${mediaType}?sort_by=popularity.desc&api_key=${process.env.REACT_APP_ACCOUNT_KEY}&page=${page}`;

    axios
      .get(url)
      .then((response) => setTopMovies(response.data.results))
      .catch((err) => {
        console.log(err.message);
      });
  }

  async function fetch100Movies() {
    const tempHundredMovies = [];

    for (let i = 1; i < 6; i++) {
      const url = `https://api.themoviedb.org/3/discover/${mediaType}?sort_by=popularity.desc&api_key=${process.env.REACT_APP_ACCOUNT_KEY}&page=${i}`;

      axios
        .get(url)
        .then((response) => tempHundredMovies.push(response.data.results))
        .catch((err) => {
          console.log(err.message);
        });
    }

    setHundredMovies(tempHundredMovies);
  }

  function handleSelectionChange(type, value) {
    switch (type) {
      case "media":
        setMediatType(value);
        break;

      default:
        break;
    }
  }

  async function searchMovie(keyword) {
    const url = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_ACCOUNT_KEY}&query=${keyword}`;

    const tvUrl = `https://api.themoviedb.org/3/search/tv?&api_key=${process.env.REACT_APP_ACCOUNT_KEY}&query=${keyword}`;

    axios.get(url).then((response) => setResults(response.data.results));

    axios.get(tvUrl).then((response) => setTvResults(response.data.results));

    navigate(`/results/${keyword}`);
  }

  async function getMovieDetail(type, id) {
    const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.ACCOUNT_KEY}&language=en-US`;

    axios.get(url).then((response) => setMovieDetail(response.data));
  }

  useEffect(() => {
    fetch100Movies();
  }, []);

  // console.log(hundredMovies);
  // console.log(polishHundMovies);

  useEffect(() => {
    const temp = [];

    hundredMovies.forEach((movies) =>
      movies.forEach((movie) => {
        temp.push(movie);
      })
    );

    setPolishHundMovies(temp);
  }, [hundredMovies]);

  useEffect(() => {
    fetchMovies();
  }, [mediaType, page]);

  return (
    <GlobalContext.Provider
      value={{
        topMovies,
        searchMovie,
        results,
        tvResults,
        getMovieDetail,
        movieDetail,
        mediaType,
        handleSelectionChange,
        page,
        setPage,
        polishHundMovies,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
