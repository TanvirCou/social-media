import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Profile from "./components/Profile/Profile/Profile";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:name" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
