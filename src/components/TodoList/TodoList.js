import React from 'react';
import Todo from '../Todo/Todo';

const TodoList = ({todos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
     {
         todos.map(todo => <Todo text={todo.text}></Todo>)
     }
            </ul>
            
        </div>
    );
};

export default TodoList;