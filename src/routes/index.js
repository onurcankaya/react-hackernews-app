import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import LoginPage from '../pages/login'
import SearchPage from '../pages/search'

class Navigation extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/search" component={SearchPage} />
        <Redirect to="/" />
      </Switch>
    )
  }
}

export default Navigation
