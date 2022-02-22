import { Link } from "react-router-dom";

function Header({ favorites })
{
    return (
        <div className="container-fluid bg-dark">
            <div className="row">
                <div className="col">
                    <h1 className="text-light">Webflix</h1>
                </div>
                <div className="col">
                    <Link className="btn btn-primary" to={"/"}>
                        Home
                    </Link>
                </div>
                <div className="col">
                    <Link className="btn btn-primary" to={"/favorites"}>
                    {`Favorites (${favorites.length})`}
                    </Link>
                </div>
            </div>
            
            
        </div>
    )
}
  
Header.defaultProps = {
    favorites: [],
  };


export default Header ;