import React, { useState } from 'react'
import { Input } from './Input';
import { Keypad } from './Keypad';

export const Calculator = () => {
  const [input,setInput] = useState('');

  return (
    <div>
      <h1>Calculator</h1>
      <Input input={input}/>
      <Keypad setInput={setInput}/>
    </div>
  )
}
