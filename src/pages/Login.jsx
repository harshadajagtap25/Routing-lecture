import React from "react";

function Login() {
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
      >
        <input placeholder="email" type="email" />
        <input placeholder="password" type="password" />
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default Login;
