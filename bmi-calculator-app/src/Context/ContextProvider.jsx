import React, { createContext, useState } from "react";

export const AuthContextProvider = createContext();
export const ContextProvider = ({ children }) => {
  const [AuthState, setAuthState] = useState({
    isAuth: false,
    user: "",
    email: "",
    pass: "",
  });
  const AuthRegister = (payload) => {
    console.log({payload});
    setAuthState((prev) => ({
      ...prev,
      user: payload.username,
      email: payload.email,
      pass: payload.password,
    }));
  };
  const AuthLogin = () => {
    setAuthState((prev) => ({ ...prev, isAuth: true }));
  };
  const AuthUpdate = (payload) => {
    if (payload.email) {
      setAuthState((prev) => ({ ...prev, email: payload.email }));
    }
    if (payload.username) {
      setAuthState((prev) => ({ ...prev, user: payload.userName }));
    }
    if (payload.password) {
      setAuthState((prev) => ({ ...prev, pass: payload.password }));
    }
  };
  const AuthLogout = () => {
    setAuthState({
      isAuth: false,
      user: "",
      email: "",
      pass: "",
    });
  };
  return (
    <AuthContextProvider.Provider
      value={{ AuthState, AuthLogin, AuthLogout, AuthRegister, AuthUpdate }}
    >
      {children}
    </AuthContextProvider.Provider>
  );
};
