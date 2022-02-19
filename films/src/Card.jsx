function Card({ poster_path, title }) {
    const imageURL = poster_path && `https://image.tmdb.org/t/p/w92${poster_path}`;;
    return (
    <div>
        <div className="text-center">
            <div>
                <img src={imageURL} className="img-fluid"></img>
            </div>
            <span>{title}</span>
        </div>
    </div>
    );
  }

export default Card ;