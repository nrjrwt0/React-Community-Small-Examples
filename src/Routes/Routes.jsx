import React from 'react'
import { Route, Switch } from 'react-router'
import { Calculator } from '../Components/Calculator/Calculator'
import { Menu } from '../Components/Menu'

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact>
          <Menu />
        </Route>
        <Route path='/calculator'>
            <Calculator />
        </Route>
      </Switch>
    </>
  )
}

