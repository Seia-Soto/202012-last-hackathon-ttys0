import * as React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// NOTE: Pages;
import MainPage from './pages/MainPage'

const App = props => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage} />
      </Switch>
    </Router>
  )
}

export default App
