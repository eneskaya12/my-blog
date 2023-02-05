import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      {user ? <Topbar /> : true}
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />}/>
        <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register />}/>
        <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />}/>
        <Route path="/write" element={user ? <Write /> : <Navigate replace to="/"/>}/>
        <Route path="/settings" element={user ? <Settings /> : <Navigate replace to="/"/>}/>
        <Route path="/post/:postId" element={<Single />}/>
      </Routes>
    </Router>
  );
}

export default App;
