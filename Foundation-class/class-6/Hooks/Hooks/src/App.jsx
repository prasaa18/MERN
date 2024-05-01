import { useEffect, useState } from 'react'

import axios from "axios"
import './App.css'

function App() {
  // const [todos, setTodos] = useState(0)
 
  // useEffect(()=>{

  //    axios.get("https://sum-server.100xdevs.com/todos")
  //    .then(function(response){
  //      setTodos(response.data.todos)
  //    })
        
  // }, []);
  const [selectedId , setSelectedId]=useState(1);

  return <div>

    <button onClick={function(){
      setSelectedId(1);
    }}> 1</button>

<button onClick={function(){
      setSelectedId(2);
    }}> 2</button>

     <Todo id={selectedId}/>
  </div>
  


  // return (
  //   <>
  //    <Todo id={3}/>
   
  //      {/* {todos.map(todo =><Todo title={todo.title} description={todo.description}/>)} */}
  //   </>
  // )
}

// function Todo1({title, description}){
//   return <div>
//     <h1>{title}</h1>
//     <h2>{description}</h2>
//   </div>
// }


function Todo({id}){
  const [todo, setTodos]=useState({});

   useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(response=>{
      setTodos(response.data.todo);
    })
   },[id])

  return <div>
    {id}
  <h1>{todo.title}</h1>
  <h2>{todo.description}</h2>
</div>
}



export default App