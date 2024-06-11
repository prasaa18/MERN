import { useState ,lazy, Suspense} from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
const Dashoard = lazy(()=>import('./components/Dashboard'))
const Landing = lazy(()=>import('./components/Landing'))

function App() {
  const [count, setCount] = useState(0)

  return (

    //suspense api  -- asynchronus data or coponent fetchig  

    <div>
      <BrowserRouter>
        <Appbar />   
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading.."}><Dashoard/></Suspense>}></Route>
          <Route path="/"  element={<Suspense fallback={"loading.."}><Landing/></Suspense>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return <div>
    <div>

      <button onClick={() => {
        navigate("/")
        // window.location.href="/"
      }}>Landing</button>
      <button onClick={() => {
        navigate("/dashboard")
        // window.location.href="/"
      }}>Dashboard</button>
    </div>

  </div>
}

export default App
