import React, { useContext, useState } from 'react'
import { AuthContextProvider } from '../Context/ContextProvider'
import styled from 'styled-components';

export const BMIPage = () => {
    const data= useContext(AuthContextProvider)
    const [formData,setFormData]= useState({height:"",weight:""})
    const [bimValue,setbimValue] = useState("")
    console.log({data});
    const handelChange=(e)=>{
      const {name,value}= e.target
      setFormData(prev=>({...prev,[name]: +value}))
    }
    const handleSubmit=(e)=>{
e.preventDefault()
const bim= formData.weight/formData.height**2
setbimValue(bim.toFixed(2))
}
  return (
    <FormContainer>
        <h2>Calculate your BIM Here</h2>
     
        <h3>{bimValue&&`Your calculatated BMI is ${bimValue}`}</h3>
      <form onSubmit={handleSubmit}>
        {/* <FormLabel htmlFor="email">Height</FormLabel> */}
        <FormInput onChange={handelChange} value={formData.height} placeholder='Height in feet'
          type="Number"
          name="height"
           />
        {/* <FormLabel htmlFor="password">Width</FormLabel> */}
        <FormInput onChange={handelChange} value={formData.width} placeholder='Weight in kg'
          type="Number"
          name="weight"
        />

        <FormButton type="submit">CALCULATE</FormButton>
      </form>
    </FormContainer>
  )
}
const FormContainer = styled.div`
 width: 350px;
  margin:2rem auto;
  border-radius: 8px;
  h3{
  color: #673ab7;
}
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
