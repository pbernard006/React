import { useDispatch, useSelector } from "react-redux";
import { favoritesSlice } from "./slices";

function Card({ poster_path, title, id}) {
    const imageURL = poster_path && `https://image.tmdb.org/t/p/w92${poster_path}`;
    console.log(imageURL);
    const dispatch = useDispatch();
    const addToFavorite = (event) => {
    event.preventDefault();
    dispatch(favoritesSlice.actions.toggle({ id }));
  };
    return (
    <div>
        <div className="text-center">
            <div>
                <img src={imageURL} className="img-fluid"></img>
            </div>
            <span>{title}</span>
            <button onClick={addToFavorite}>
                ♥
            </button>
        </div>
    </div>
    );
  }

export default Card ;