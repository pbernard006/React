import Button from "./Button";

function Card({value, color, onDelete}){
    return (
        <div style={{border: "2px solid red", height: 180}}>
            <p>{`${value} - ${color}`}</p>
            <Button onClick={onDelete}/>
        </div>
    )
}

export default Card