// RegistrationForm.js
import React, { useContext, useState } from "react";
// import { useForm } from 'react-hook-form';
import styled from "styled-components";
import { AuthContextProvider } from "../Context/ContextProvider";

const FormContainer = styled.div`
  width: 100%;
  margin: 1rem auto;
  border-radius: 8px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  color: #e74c3c;
  font-size: 14px;
`;

export const SignIn = ({ setIsLogin }) => {
  const {AuthRegister}= useContext(AuthContextProvider)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    let { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.username == "" &&
      formData.password == "" &&
      formData.email == ""
    ) {
      alert("all feild is required");
    } else {
      AuthRegister(formData)
      alert("Your Registation successfull");
      setFormData({ username: "", email: "", password: "" });
      setIsLogin(true);
    }
  };

  return (
    <FormContainer>
      <h2>Register here</h2>
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="username">Username</FormLabel>
        <FormInput
          onChange={handelChange}
          value={formData.username}
          type="text"
          name="username"
        />

        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput
          onChange={handelChange}
          value={formData.email}
          type="email"
          name="email"
        />

        <FormLabel htmlFor="password">Password</FormLabel>
        <FormInput
          onChange={handelChange}
          value={formData.password}
          type="password"
          name="password"
        />

        <FormButton type="submit">Register</FormButton>
      </form>
    </FormContainer>
  );
};
