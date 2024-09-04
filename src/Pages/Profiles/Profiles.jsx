// import React from "react";
import "./Profiles.css";
import profile_logo from "../../assets/profile_img.png";
import { useUser } from "../../components/UserProvider";
import { useNavigate } from "react-router-dom";

const Profiles = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div className="profiles">
      <h2>Who is Watching?</h2>
      <div className="profile-img">
        <img src={profile_logo} alt="" onClick={() => navigate("/")} />
        <p>{user ? user.name : "Guest"}</p>
      </div>
    </div>
  );
};

export default Profiles;
