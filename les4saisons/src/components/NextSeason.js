import data from '../data.json';

function nextSeason({name}){

    const season = data.seasons[name];
    var nameNextSeason = "";
    
    switch(name){
        case "winter": 
            nameNextSeason = "spring" ;
            break ;
        case "spring":
            nameNextSeason = "summer" ;
            break ;
        case "summer":
            nameNextSeason = "autumn" ;
            break ;
        default :
            nameNextSeason = "winter" ;
            break ;
    }

    nextSeason = data.seasons[nameNextSeason] ;

    const duration = Math.floor((Date.parse(season.dateFin) - Date.parse(season.dateDeb))/(1000*60*60*24));
    const distance = Math.floor((Date.parse(nextSeason.dateDeb) - Date.parse(new Date()))/(1000*60*60*24));

    return(
        <div>
            <h1>{nextSeason.name}</h1>
            <h6>Cette saison dure {duration} jours</h6>
            <p>Encore {distance} jours à tenir</p>
        </div>
    )
}

export default nextSeason ;