import React, { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);

  return (
    <div className="App">
     <Header></Header>
     <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}></Form>
     <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
