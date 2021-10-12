import React from 'react'
import { Button } from './Button';

const allButtons = ['AC', '+/-', '%', '÷', 7, 8, 9, 'X', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
export const Keypad = ({setInput}) => {
  return (
    <div>
      {allButtons.map((value,index) => {
        return <Button key={index} value={value} setInput={setInput}/>
      })}
    </div>
  )
}
