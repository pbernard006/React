import { Link } from "react-router-dom";


import Card from "./Card";

function VerticalList({ data }) {
  
  return (
    <div className="row">
      {data.map((entry) => (
        <div className="col-4" key={entry.id}>
          <Link to={`/movies/${entry.id}`}>
            <Card {...entry} />
          </Link>
        </div>
      ))}
    </div>
  );
}

VerticalList.defaultProps = {
  data: [],
};

export default VerticalList;