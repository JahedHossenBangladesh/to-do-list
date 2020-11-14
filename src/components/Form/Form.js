import React from 'react';

import { faHome,faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = ({setInputText,todos,setTodos,inputText}) => {
    const inputHandler =(e) =>{

        setInputText(e.target.value);
    }
    const submitHandler =(e) =>{
        e.preventDefault();
         setTodos([...todos,{
            text: inputText,
            complete: false,
            id : Math.random() * 100
             
         }]
        )
        setInputText("");
    }
    return (
        <div>

            <form>
            <input type="text" value={inputText} onChange={inputHandler} className="todo-input"/>
            <button onClick={submitHandler} className="todo-button" type="submit">
            <FontAwesomeIcon icon={faPlusSquare} />
              
            </button>
<div className="select">
    <select name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed"> completed</option>
        <option value="uncompleted">uncompleted</option>

    </select>
</div> </form>
            
        </div>
    );
};

export default Form;