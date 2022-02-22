import Card from "./Card";

function Favorite(favorites){
    console.log(favorites.favorites)
    return(
        <div className="container">
            <div className="row">
                {favorites.favorites.map((idFilm) => (
                    <div key={idFilm} className="col-4">
                       <h1>{idFilm}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Favorite ;