import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    item: "Calculator",
    path: "calculator"
  }
]

export const Menu = () => {
  return (
    <div>
      {menuItems.map(({item,path}) =>  {
       return <Link to={`/${path}`}>{item}</Link>
      })}
    </div>
  )
}
