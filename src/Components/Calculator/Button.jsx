import React from 'react'
import { ButtonBox } from './button.style'
export const Button = ({value,setInput}) => {
  
  const inputHandler = (val) => {
    setInput(prev => prev+val)
  }
  
  return (
    <ButtonBox onClick={() => inputHandler(value)}>{value}</ButtonBox>
  )
}
