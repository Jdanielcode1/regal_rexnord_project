import { BrowserRouter as Router, Route, Routes, Navigate  } from "react-router-dom"
import Login from "./Pages/Login"
import { Home } from "./Pages/Home"
import Administrator from "./Pages/Administrator"
import ProtectedRoutes from "./Router/ProtectedRoutes"

function App() {
  return (
    <Router>
      <Routes>        
        <Route path="/" element={ <Home/> }/>
        <Route path="/login" element={ <Login/> }/>

        <Route element={<ProtectedRoutes/>}>
          <Route path="/administrator" element={ <Administrator/> }/>
        </Route>

        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </Router>
  )
}



export default App
