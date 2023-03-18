import { BrowserRouter as Router, Route, Routes  } from "react-router-dom"
import Login from "./Pages/Login"
import { Home } from "./Pages/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/home" element={ <Home/> }/>
      </Routes>
    </Router>
  )
}



export default App
