import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Profile from "./components/Profile/Profile/Profile";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { useContext } from "react";
import { AuthContext } from "./components/context/AuthContext";


function App() {
  const {user} = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="/profile/:name" element={<Profile />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
