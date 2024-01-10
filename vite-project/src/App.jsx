import { useState } from 'react'
import { Login } from './pages/login'
import { Flashcard } from './pages/flashcard'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Navbar } from "./components/navbar"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
        <Router>
        <Navbar/>
          <Routes>
            <Route path = "/" element = {<Flashcard />}/>
            <Route path="/login" element={ <Login />}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App
