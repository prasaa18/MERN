import { useEffect, useMemo, useState } from 'react'

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
// } d


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

function  Sum(){
   const [counter, setCounter]=useState(0);
   const [inputValue, setInputValue]=useState(1);


   const[count1, setCount]=useState(0);

  //  let count =0;
  //  for (let i =1; i<=inputValue; i++){
  //   count+=i;   }
// usememo change on;y when input chages

  let count = useMemo(()=>{
    let finalCount =0;
    for(let i=0; i<=inputValue; i++){
      finalCount+=i;
    }
    return finalCount;
  },[inputValue])

// useeffect include extra  input  7]bnon[8on]
  useEffect(()=>{
    let finalCount=0;
    for (let i=0; i<=inputValue; i++){
      finalCount+=i;
    }
    setCount(finalCount);
  }, [inputValue])



   return <div>
    <input onChange={function(e){setInputValue(e.target.value)}} placeholder='sum from 1 to n'></input>
    <br />
    sum from 1 to n {inputValue} is {count}
    <br />
    <button onClick={()=>{
      setCounter(counter+1)
    }}> counter {{ counter}}</button>
   </div>
}




//custom hook

function useTodos(){
   const[todos, setTodos]=useState([]);
  useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(response=>{
      setTodos(response.data.todo);
    })
   },[])
   return todos;

}

function App (){
  const todo= useTodos();
  return <>
  
  {{todo}}
  
  </>
}
 

export default App