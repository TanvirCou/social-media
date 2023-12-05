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
import Messenger from "./components/Messenger/Messenger/Messenger";


function App() {
  const {user} = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(user || (JSON.parse(localStorage.getItem("data"))))  ? <Home /> : <Login />} />
        <Route path="/profile/:name" element={<Profile />} />
        <Route path="/login" element={user || (JSON.parse(localStorage.getItem("data"))) ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user || (JSON.parse(localStorage.getItem("data"))) ? <Navigate to="/" /> : <Register />} />
        <Route path="/messenger" element={!(JSON.parse(localStorage.getItem("data"))) ? <Navigate to="/" /> : <Messenger />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
