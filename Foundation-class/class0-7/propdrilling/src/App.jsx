
import './App.css'
// import { CountContext } from './context'
import { useContext } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtoms } from './Store/atoms/count'

function App() {
 // const [count, setCount] = useState(0)
//wrap anyone wants to use teleported value inside  a provider 
  return (
    <>


        {/* <div>
          <CountContext.Provider value={{count,setCount}}>
          <Count setCount={setCount}/>
          </CountContext.Provider>
        </div> */}


        <div>
          <RecoilRoot>
             <Counter/>
          </RecoilRoot>
            
        </div>
    </>

     ) }  

     function Counter() {

      console.log("re render ")
      return (
        <div>
          <CountRerender/>
          <Buttons/>
        </div>
      )
    }

     function CountRerender() {
      const count = useRecoilValue(countAtoms); /// only happening wit tjis rerender bcz of count changes 
      return (
        <div>
          {count}
        </div>
      );
    }
    
    function Buttons() {
      //const [count, setCount] = useRecoilState(countAtoms);
      const  setCount =useSetRecoilState(countAtoms);//

      console.log(" button rerenderdunn nesaary re render can be avoided only using useSetRecoilstate")
      return (
        <div>
          <button onClick={() => setCount(count=>count + 1)}>Increase</button>
          <button onClick={() => setCount(count =>count - 1)}>Decrease</button>
        </div>
      );
    }

// function Count({setCount}){
//   return <div>
//     <CounterRenderer/>
//     <Buttons setCount={setCount} />  
//   </div>
// }

// function CounterRenderer(){
//   const count =useContext(CountContext);

//   return <div>
//     {count}
//   </div>
// }



// function Buttons({setCount}){
//   const count =useContext(CountContext);

//    return <div>
//     <button onClick={()=>{
//       setCount(count+1);
//     }}> incerese</button>
//     <button onClick={()=>{
//       setCount(count-1);
//     }}> Dncerese</button>
//    </div>
  
// }

export default App
  