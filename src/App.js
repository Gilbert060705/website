import "./App.css";
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Info from './pages/Info'
import MyTasks from './pages/MyTasks'
import background from './img/bg.jpg'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes> 
          <Route path="/" element ={<Home/>}/>
          <Route path="/info" element ={<Info/>}/>
          <Route path="/mytasks" element ={<MyTasks/>}/>  
        </Routes>
      </Router>
    </div>
  )
}

export default App