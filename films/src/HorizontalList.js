import { Link } from "react-router-dom";
import Movie from "./Movie";

function HorizontalList({data}){
    return (
        <div className="row">
            {data.slice(0,3).map((entry) => (
                <div key={entry.id} className="col">
                    <Link to={`/movies/${entry.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w92${entry.backdrop_path}`}></img>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default HorizontalList ;