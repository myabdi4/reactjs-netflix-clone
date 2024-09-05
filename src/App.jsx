import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login.jsx";
import Player from "./Pages/Player/Player.jsx";
import Profiles from "./Pages/Profiles/Profiles.jsx";

function App() {
  const [initializing, setInitializing] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If the user is authenticated, check local storage or redirect
        const lastRoute = localStorage.getItem("lastRoute") || "/";
        navigate(lastRoute);
      } else {
        // If the user is not authenticated, navigate to login
        localStorage.removeItem("lastRoute");
        navigate("/login");
      }
      setInitializing(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  if (initializing) {
    // Optionally render a loading spinner while initializing
    return <div>Loading...</div>;
  }

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
