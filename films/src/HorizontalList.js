import { Link } from "react-router-dom";
import Card from "./Card";
import Movie from "./Movie";

function HorizontalList({data}){
    console.log("data "+data[0].poster_path);
    return (
        <div className="row">
            {data.slice(0,3).map((entry) => (
                <div key={entry.id} className="col">
                    <Link to={`/movies/${entry.id}`}>
                        <Card poster_path={entry.poster_path}/>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default HorizontalList ;