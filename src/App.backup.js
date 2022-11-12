import React, {useState, useRef, useEffect} from 'react';
import Todolist from './Todolist'
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, settodos] = useState([])
  const todoNameRef = useRef()

    useEffect(()=>{
      const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      if (storedTodos) settodos(storedTodos) 
    }, [])

    useEffect(()=>{
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    settodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if(name === '') return 
    settodos(prevtodos =>{
      return [...prevtodos, {id: uuidv4, name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos(){
    const newTodos = todos.filter(todo => !todo.complete)
    settodos(newTodos)
  }

  function myapp(){
    const [count, setCount] = useState(5)
  }


  return (
    <>
      <Todolist todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onclick={handleClearTodos}>clear Todo</button>
      <div>{todos.filter(todo => !todo.complete).length} left todo</div>
      
      <button>+</button>
      <span>{count}</span>
      <button>-</button>
    </>
  )
}

export default App;
