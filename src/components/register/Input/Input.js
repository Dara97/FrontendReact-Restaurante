import React from "react";
import "./Input.css";

const Input = ({ attribute, handleChange, param}) => {
    return(
        <div>
            <input    
            id = {attribute.id}
            name = {attribute.name}
            type = {attribute.type}
            onChange = {(e) => handleChange(e.target.name, e.target.value)}
            className ={ param ? 'input-error' : 'form-group' }
            />
        </div>
    )
};

export default Input;