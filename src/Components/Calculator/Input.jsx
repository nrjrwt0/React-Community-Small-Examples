import React from 'react'
import { InputBox } from './input.style'

export const Input = ({input}) => {
  return (
    <div>
      <InputBox type="text" value={input} readOnly/>
    </div>
  )
}
