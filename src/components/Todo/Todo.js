import React from 'react';
import { faCheck,faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Todo = ({text}) => {
    console.log(text)
    return (
        <div className="todo">
            <li className="todo-item"> <h5 style={{color:"red"}}>{text}</h5></li>
            <button className="complete-btn">   <FontAwesomeIcon icon={faCheck} /></button>
            <button className="trash-btn">   <FontAwesomeIcon icon={faTrash} /></button>
            
        </div>
    );
};

export default Todo;