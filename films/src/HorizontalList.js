import { Link } from "react-router-dom";
import Card from "./Card";
import Movie from "./Movie";

function HorizontalList({data, addToFavorite, favorites}){
    return (
        <div className="row">
            {data.slice(0,3).map((entry) => (
                <div key={entry.id} className="col">
                    <Link to={`/movies/${entry.id}`}>
                        <Card/>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default HorizontalList ;