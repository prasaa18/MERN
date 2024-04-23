

export function Todos({todos}){
   
    return <div>
        {todos.map(function(todo){
               return <div>
                    
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed == true ? "completed ":  "mark as Complete" }</button>
                    
                 </div>                            // only one parent divi return as well as function inside inside 
                                                   //those u can add any div  bjut 1 parent div
                 
        })}
 
    </div>
}