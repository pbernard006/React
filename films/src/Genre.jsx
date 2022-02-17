import data from "./data.json";

function Genre({id}){
    const label = data.genres[id];
    if(!label) return null ;

    return(<span> {label}</span>)
}

export default Genre ;