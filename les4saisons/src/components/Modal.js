import { useState } from "react";

function Modal({label, children}){
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    
    if(!open){
        return (
            <button onClick={toggle}>
                {label}
            </button>
        );
    }

    return (
        <div>
            <div>{children}</div>
            <div>
                <button onClick={toggle}>Ok, je vais être patient...</button>
            </div>
        </div>
    )

}

export default Modal ;