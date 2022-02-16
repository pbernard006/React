import React from "react";
import data from "../data.json";

function Season({name}){

    const season = data.seasons[name];

    const distance = Math.floor((Date.parse(new Date()) - Date.parse(season.dateDeb))/(1000*60*60*24));
 
    return (
        <div>
            <h1>{season.name}</h1>
            <p>Depuis {distance} jours</p>
        </div>
    )
}

export default Season ;