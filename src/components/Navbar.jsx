import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  
  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <div style={{ padding: "20px", display: "flex", gap: "20px" }}>
      Navbar
      <Link to="">Home</Link>
      <Link to="/feeds">Feeds</Link>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
}

export default Navbar;
