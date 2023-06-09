import React from 'react'

import './App.css';

import AddTask from './AddTask';
import TodoList from './TodoList';

import { useState, useEffect } from 'react';

// import todos from "./test.json"

function App() {

  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    fetch('/todo')
      .then((res) => res.json())
      .then((data) => setTodos(data));
  },[])




  return (
    <div>
      <div>
        <TodoList todos={todos}/>
      </div>
      <div>
        <AddTask/>
      </div>
    </div>

    
  );
}

export default App;