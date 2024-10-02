import { useEffect, useState } from 'react'
import{TodoProvider} from './context/TodoContext'
import './App.css'
import { TodoForm, Todoitem } from './components'

function App() {
  const [todos,setTodos]=useState([])


  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo} ,...prev])
  }
const updateTodo=(id,todo)=>{
  setTodos((prev=>prev.map((prevTodo)=>(prevTodo.id===todo.id ? todo: prevTodo))))
}
const deleteTodo=(id)=>{
  setTodos((prev)=>prev.filter((todo)=> todo.id!=id))

}

const toggleComplete=(id)=>{
  setTodos((prev)=>
  prev.map((prevTodo)=>
      prevTodo.id===id? {...prevTodo,completed:!prevTodo.completed} : prevTodo 
  )
  
  
  )

}

useEffect(()=>{
  const todos=JSON.parse(localStorage.getItem("todos"))
  if(todos&& todos.length>0){
    setTodos(todos)
  } 

  
},[])

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])


  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,toggleComplete}}>

     <TodoForm/>
     {
      todos.map((todo)=>(
        <div key={todo.id}
        className='width-full'>
          <Todoitem todo={todo}/>
        </div>
      ))
     }

    </TodoProvider>
  )
}

export default App
