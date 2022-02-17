import { useState } from "react";
import VerticalList from "./VerticalList";

import Input from './Input';
import data from "./data.json";

function Home() {
  const [value, setValue] = useState("");
  const onChange = (event) => setValue(event.target.value);
  const movies = data.movies.filter((movie) =>
    movie.title.match(new RegExp(value, "i"))
  );
  return (
    <div>
        <Input value={value} onChange={onChange}/>
      <VerticalList data={movies} />
    </div>
  );
}

export default Home;