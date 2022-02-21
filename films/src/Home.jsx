import { useCallback, useEffect, useState } from "react";
import VerticalList from "./VerticalList";

import Input from './Input';
import data from "./data.json";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";

function buildUrl(value) {
  return value.length > 0
    ? `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${process.env.REACT_APP_API_KEY}`
    : `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;
}


function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [value, setValue] = useState(searchParams.get("q") ? searchParams.get("q") : '');
  const onChange = useCallback(
    (event) => {
      setValue(event.target.value);
      setSearchParams(event.target.value ? { q: event.target.value } : {});
    },
    [setSearchParams]);

    const { data, isLoading, isFetching, error } = useQuery("movies", () =>
    fetch(buildUrl(value)).then((response) => response.json())
  );
  
  

  return (
    <div>
        <Input value={value} onChange={onChange}/>
        {error && <div>{error}</div>}
        {(isLoading || isFetching) && <div>Loading movies...</div>}
      {!isLoading && !error && (
        <VerticalList data={data?.results} />
      )}
    </div>
  );
}

export default Home;