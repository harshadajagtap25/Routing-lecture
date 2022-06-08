import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  const login = () => {
    fetch("https://reqres.in/api/login", {
      
      method: "POST",
      headers: { "context-type": "application/json" },
      data: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        // setIsAuth(d.token);
        console.log(d);
        // localStorage("token", d.token);
      });

    // setIsAuth(true);

    // if(state.from){
    //     navigate(state.from, {replace:true})
    // }
    // else {
    //     navigate("/")
    // }
  };
  const logout = () => {
    localStorage.setItem("token", "");

    // setIsAuth(false);
    // navigate("/")
  };
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setIsAuth(token);
    }
  });
  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
