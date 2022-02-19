import { useCallback, useEffect, useState } from "react";
import VerticalList from "./VerticalList";

import Input from './Input';
import data from "./data.json";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [value, setValue] = useState(searchParams.get("q") ? searchParams.get("q") : '');
  const onChange = useCallback(
    (event) => {
      setValue(event.target.value);
      setSearchParams(event.target.value ? { q: event.target.value } : {});
    },
    [setSearchParams]);

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    async function fetchMovies(query) {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          query.length > 0
            ? `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.REACT_APP_API_KEY}`
            : `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
        );
        if (!response.ok) {
          setError("Fetching movies failed");
        }
        const data = await response.json();
        setMovies(data.results);
      } catch {
        setError("Fetching movies failed");
      } finally {
        setLoading(false);
      }
    }
    useEffect(() => {
      fetchMovies(value);
    }, [value]);
  
  

  return (
    <div>
        <Input value={value} onChange={onChange}/>
        {error && <div>{error}</div>}
      {loading && <div>Loading movies...</div>}
      {!loading && !error && (
        <VerticalList data={movies} />
      )}
    </div>
  );
}

export default Home;