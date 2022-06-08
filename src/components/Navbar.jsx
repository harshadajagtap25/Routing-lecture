import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { isAuth, logout } = useContext(AuthContext);

  const handleLoginClick = () => {
    if (isAuth) {
      //wants to logout
      logout();
      navigate("/");
    } else {
      //wants to login
      navigate("/login");
    }
  };
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      Navbar
      <Link to="">Home</Link>
      <Link to="/feed">Feed</Link>
      <Link to ="/posts">Posts</Link>
      <button onClick={handleLoginClick}>{isAuth ? "Logout" : "Login"} </button>
    </div>
  );
}

export default Navbar;
