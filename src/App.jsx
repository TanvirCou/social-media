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
import PrivateRoute from "./components/Route/PrivateRoute";
import PublicRoute from "./components/Route/PublicRoute";
import NotFound from "./components/NotFound/NotFound";


function App() {
  const { user, loggedInUser } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute> <Home /> </PrivateRoute>} />
        <Route path="/profile/:name" element={<PrivateRoute> <Profile /> </PrivateRoute>} />
        <Route path="/login" element={<PublicRoute> <Login /> </PublicRoute>} />
        <Route path="/register" element={<PublicRoute> <Register /> </PublicRoute>} />
        <Route path="/messenger" element={!(loggedInUser || user) ? <Navigate to="/" /> : <Messenger />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
