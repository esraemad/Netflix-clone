import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
import useDebounce from "react-use/lib/useDebounce";
import { updateSearchCount, getTrendingMovies } from "./appwrite";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceSearchTerm, setDebounceSearchTerm] = useState("");
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // debounce search term update to prevent excessive too many API calls requests
  // update debounceSearchTerm 500ms after user stops typing
  useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm]);

  // TMDB API details
  const API_BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  useEffect(() => {
    fetchMovies(debounceSearchTerm);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceSearchTerm]);

  const fetchMovies = async (query = "") => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies!");
      }
      const data = await response.json();
      //console.log("Fetched movies:", data);
      if (data.response === "False") {
        setErrorMessage(data.error, "Failed to fetch movies!");
        setMovies([]);
        return;
      }
      setMovies(data.results || []);
      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
      setErrorMessage("");
    } catch (error) {
      console.error("Error fetching movies:", error);
      setErrorMessage("Failed to fetch movies. Please try again later!");
    } finally {
      setIsLoading(false);
    }
  };

  const loadTrendingMovies = async () => {
    try {
      const trending = await getTrendingMovies();
      setTrendingMovies(trending || []);
    } catch (error) {
      console.error("Error loading trending movies:", error);
    }
  };
  useEffect(() => {
    loadTrendingMovies();
  }, []);
  return (
    <>
      <main>
        <div className="pattern" />
        <div className="wrapper">
          <Header />
          {trendingMovies.length > 0 && (
            <section className="trending">
              <h2>Trending Movies</h2>
              <ul>
                {trendingMovies.map((movie,index) => (
                  <li key={movie.$id} className="trending-movie">
                    <p>{index+1}</p>
                    <img
                      src={movie.poster_url}
                      alt={movie.searchTerm}
                      title={movie.searchTerm}
                    />
                  </li>
                ))}
              </ul>
            </section>
          )}
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <section className="all-movies">
            <h2>All Movies</h2>
            {isLoading ? (
              <Spinner />
            ) : errorMessage ? (
              <p className="error text-red-500">{errorMessage}</p>
            ) : (
              <ul>
                {movies.length > 0 ? (
                  movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))
                ) : (
                  <p>No movies found!</p>
                )}
              </ul>
            )}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
