import { useState } from 'react'

import './App.css'

function App() {
//   const [count, setCount] = useState(0)

//   return (
//    <div>
//       <customButton count ={count} setCount ={setCount}></customButton>
//       <customButton count ={count+1} setCount ={setCount}></customButton>
//      </div>
//     )
//   }

//   function customButton(props){
 
//   function onclickHandler(){
//     props.setCount(props.count+1);
//   }
//   return <button onClick={onclickHandler}>
//     counter {props.count}
    
//   </button>
// }


  const [todos, setTodos]= useState([{
    title:"go to gym",
    description:"go gym at 7 -5pm",
    complted:false
   },
    {
  title:"study dsa",
  description:"go gym at  10",
  complted:true
  }, {
  title:"study dsa",
  description:"go gym at  10",
  complted:true
  }])

  function addTodo(){
    //[1 2]
    //[...todos, 3]=>[1 2 3]
  // component re render when settodo do the state manage
    setTodos([...todos,{
      title:"newtodod",
      description:"new des"
    }])
  }

  return(

    //whenwhere paremt re render child also rerender its state no matter what if that can be avoided by react.memo
    <div>
      {/* {JSON.stringify(todos)} */}

      <Todo title="harkirat" description="harakaiia"/>
      
      {/* <Todo title={todos[0].title} description={todos[0].description}/> // custom 
      <Todo title={todos[1].title} description={todos[1].description}/> */}

   {/* javascript */}

      { todos. map(function(todo){
        return <Todo title={todo.title} description={todo.description}/>
      })
      }
    
    <button  style= {{ 
      border:10,
      padding:100

    }} onClick={addTodo}>Add a random todo </button>

    </div>
  )
 
}


function Todo(props){

  return <div>
    <h1>{props.title}</h1>
    <h1>{props.description}</h1>
  </div>
}


//todo application
//todo
// {
//   todos:[{title:"tdod1" , Dsecrption:"firstfoo", complete: false}]
// }

export default App
