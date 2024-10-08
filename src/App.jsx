import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login.jsx";

import { Routes, Route, useNavigate } from "react-router-dom";
import Player from "./Pages/Player/Player.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase/firebase.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profiles from "./Pages/Profiles/Profiles.jsx";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged in");
        navigate("/");
      } else {
        console.log(" Logged out");
        navigate("/login");
      }
    });
  }, []);
  return (
    <>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/whoiswatching" element={<Profiles />} />
        <Route path="/" element={<Home />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  );
}

export default App;
