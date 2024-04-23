import { useState } from "react";


export function CreateTodo(){

    const [title, settitle]= useState("");
    const [description , setDescription]= useState("");

    return <div>
        <input  style={{ padding:10,
                          margin:10
                }}
        type="text"  id="title"   onChange={function(e){
            const value= e.target.value;
            settitle(e.target.value);

        }} placeholder="title"></input><br/>

        <input style={{ padding:10,
                          margin:10
                }} type="text" onChange={function(e){
            const value= e.target.value;
            setDescription(e.target.value);
            
        }}placeholder="description"></input><br/>

        <button style={{ padding:10,
                          margin:10
                }} onClick={()=>{  fetch("http://localhost:3000/todo",{
                    method:"POST",
                    body:JSON.stringify({
                        title:title,           //react query instead of document 
                        description:description
                    }),
                    headers:{
                        "content-type":"application/json"
                    }

                }).then(async function(res){
                    const json =await res.json();
                    alert("todo aded");
                })
                                
                       
                }}> Add a Todo</button>
    </div>
}