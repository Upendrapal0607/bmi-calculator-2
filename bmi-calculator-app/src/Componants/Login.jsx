
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthContextProvider } from '../Context/ContextProvider';
import {useNavigate} from "react-router-dom"
const FormContainer = styled.div`
width: 100%;
  margin:1rem auto;
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

export const Login = () => {
  const navigate= useNavigate()
  const [formData,setFormData] =useState({email:"",password:""})
const {AuthLogin,AuthState}= useContext(AuthContextProvider)
console.log({AuthState});
const handelChange = (e) => {
  let { name, value } = e.target;

  setFormData((prev) => ({ ...prev, [name]: value }));
};
const handleSubmit = (e) => {
   e.preventDefault()
  console.log({formData});
  if(formData.email==""||formData.password==""){
    alert("all feild required")
  }else if(formData.password!=AuthState.pass||formData.email!=AuthState.email){
    alert("your password or email is wrong")
  }
  else{
     AuthLogin()
  navigate("/")
  }
  };

  return (
    <FormContainer>
        <h2>Login for calculate your BMI</h2>
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput onChange={handelChange} value={formData.email}
          type="email"
          name="email"
           />
        <FormLabel htmlFor="password">Password</FormLabel>
        <FormInput onChange={handelChange} value={formData.password}
          type="password"
          name="password"
        />

        <FormButton type="submit">Login</FormButton>
      </form>
    </FormContainer>
  );
};

