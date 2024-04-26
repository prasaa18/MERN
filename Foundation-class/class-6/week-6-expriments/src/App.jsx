import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Fragment } from 'react'



let counter =4;

function App(){

  const [Todos ,setTodos]=useState([{
      id:1,
      title:"go to gym",
      description:"gooing"
  },{
   id:2,
  title:"go to class",
  description:"gooing to class "
}])

function addTodo(){
  setTodos([...Todos,{
    id:counter++,
    title:Math.random(),
    description:Math.random()
  }])
}

  return (
    <>
      {/* <HeaderWithButton/>
      <Header title ="my name is blank"></Header> */}
        <Cardwrapper innerComponent={<TextComponent/>}/>
        <Cardwrapper innerComponent={<TextComponent2/>}/>
        
        <Cardwrapper>hi there  from children</Cardwrapper>
        <Cardwrapper>
          <TextComponent></TextComponent>
        </Cardwrapper>
      <Todo>hi</Todo>

       <button onClick={addTodo}>Add to do</button>
        {Todos.map(todo=><Todo key={todo.id} title={todo.title} description={todo.description}/>)}

       
       


    
    </>
  )
}

function TextComponent(){
  return <div>
    hi wrpper
  </div>

}
function TextComponent2(){
  return <div>
    hi wrpper2
  </div>

}
function Cardwrapper({children}){
  //create a div which has border hint: the way u craete border is border: 2px
   // and inside div render props
  
   return <div style={{border:"2px solid black" , padding:20, margin:5}}>
        {children}
        
       
   </div>
  
  }

// function Cardwrapper({innerComponent}){
// //create a div which has border hint: the way u craete border is border: 2px
//  // and inside div render props

//  return <div style={{border:"2px solid black" , padding:20, margin:5}}>
//       {innerComponent}
      
//  </div>

// }


 function Todo({title,description}){
  return <div>

    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
 }





// function HeaderWithButton(){
//   const [title, settitle] = useState("my name is blank")


//   function updateTitle(){
//       settitle("my name is "+Math.random());
      
//   }

  
//   return <>
//     <button onClick={updateTitle}>update title</button>
//      <Header title={title}/>
//   </>
// }

// function App() {
//   const [title, settitle] = useState("my name is blank")


//   function updateTitle(){
//       settitle("my name is "+Math.random());
//   }
//   /// everything wiill reerender if state changes 
//   return (
//      <Fragment>
//       <button onClick={updateTitle}>Update the title</button>
//         <Header title={title}></Header>
//         <Header title="ha"></Header>

//      </Fragment>  
//   )
// }
 const Header =React.memo(function({title}){
  return<div>
    {title}
  </div>
})

// function Header({title}){
//   return<div>
//     {title}
//   </div>
// }

export default App
