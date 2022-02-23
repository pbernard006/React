import Home from "./Home";
import Genre from "./Genre";
import data from "./data.json";
import { Link, useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import Rating from "./Rating";
import HorizontalList from "./HorizontalList";

const OVERVIEW_SIZE = 120;

function Movie(){

    const {id} = useParams();

    const [expand, setExpand] = useState(false);
    const toggle = () => setExpand(!expand);
    const movie = data.movies.find((movie) => movie.id.toString() === id);
    if (!movie) return <Navigate to="/" replace={true} />;
    const suggestions = data.movies.filter(
        (suggestion) =>
          suggestion.id !== movie.id &&
          suggestion.genre_ids.some((genre) => movie.genre_ids.includes(genre))
      );
      console.log(suggestions);
    const releaseDate = new Intl.DateTimeFormat("fr", { dateStyle: "long" }).format(new Date(movie.release_date))
    const image = `https://image.tmdb.org/t/p/w92${movie.poster_path}`;;
    return(
        <div>
            <div className="row">
                <div className="col-6">
                    <img src={image}></img>
                </div>
                <div className="col-6">
                    <Link to={"/"} className="btn btn-primary">Retour</Link>
                    <h1>{movie.title}</h1>
                    <span>sorti le {releaseDate}</span><br/>
                    <span>120 minutes</span>
                </div>
                <div className="col-12">
                    <span>Genres : &nbsp;
                    {movie.genre_ids.map((genre) => (
                        
                        <Genre key={genre} id={genre}/>
                    ))}
                    </span>
                </div>
                <div className="col-12 mt-4">
                    <h6>Synopsys</h6>
                    {movie.overview.substring(
                        0,
                        expand ? movie.overview.length - 1 : OVERVIEW_SIZE
                    )}
                    {!expand && movie.overview.length > OVERVIEW_SIZE ? "..." : ""}
                    {!expand && (
                        <>
                        <br/>
                        <button onClick={toggle} className="btn btn-primary">Lire plus</button>
                        </>
                    )}
                </div>
                <div className="col-12 mt-4">
                    <h6>Note du public</h6>
                    <div className="row">
                        <div className="col-6">
                            <Rating value={movie.vote_average}/>
                        </div>
                        <div className="col-6">
                            {movie.vote_average / 2}/5
                        </div>
                    </div>
                    
                </div>
                <div className="col-12 mt-4">
                    <h6>Contenu similaire</h6>
                    <HorizontalList data={suggestions}/>
                </div>
            </div>
            
        </div>
    )
}

export default Movie;