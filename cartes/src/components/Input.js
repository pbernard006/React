const { useState } = require("react");

const cardRegEx = /^([1-9]|10|V|J|D|Q|K|R|A)$/i ;

function Input({onAdd}){
    const [value, setValue] = useState("");

    const onChange = event => {
        setValue(event.target.value.toLocaleUpperCase());
    }

    const onKeyPress = event => {
        if(event.key === "Enter" && value.match(cardRegEx)){
            onAdd(value);
            setValue("");
        }
    }

    return (
        <input type="text" value={value} onChange={onChange} onKeyPress={onKeyPress}/>
    )
}

export default Input ;