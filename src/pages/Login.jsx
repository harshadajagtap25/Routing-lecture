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
          placeholder="eve.holt@reqres.in"
          type="email"
          name="email"
          onChange={handleOnChange}
          value="eve.holt@reqres.in"
        />
        <input
          placeholder="cityslicka"
          type="password"
          name="password"
          onChange={handleOnChange}
          value="cityslicka"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
