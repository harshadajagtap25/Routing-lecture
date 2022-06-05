import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [loginCreds, setLoginCreds] = useState({});
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleOnChange = (e) => {
    const { name, value } = e.target.value;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate("/feed")

  };
  return (
    <div>
      Login
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          justifyContent: "center",
          margin: "auto",
        }}
        onSubmit={handleSubmit}
      >
        <input
          placeholder="email"
          type="email"
          name="email"
          onChange={handleOnChange}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          onChange={handleOnChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
