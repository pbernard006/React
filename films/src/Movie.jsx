import Home from "./Home";
import data from "./data.json";
import { Link, useParams, Navigate } from "react-router-dom";
function Movie(){

    const {id} = useParams();
    const movie = data.movies.find((movie) => movie.id.toString() === id);
    if (!movie) return <Navigate to="/" replace={true} />;
    const releaseDate = new Intl.DateTimeFormat("fr", { dateStyle: "long" }).format(new Date(movie.release_date))
    const image = "https://image.tmdb.org/t/p/w92" + movie.poster_path ;
    return(
        <div>
            <div className="row">
                <div className="col-6">
                    <img src={image}></img>
                </div>
                <div className="col-6">
                    <h1>{movie.title}</h1>
                    <span>sorti le {releaseDate}</span><br/>
                    <span>120 minutes</span>
                </div>
                <div className="col-12">
                    <h2>Genre</h2>
                </div>
                <div className="col-12">
                    <h2>Sinopsis</h2>
                </div>
                <div className="col-12">
                    <h2>Notes</h2>
                </div>
            </div>
            
        </div>
    )
}

export default Movie;