import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Dashbaord from './Dashboard'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={(props, state, params) => {
            return <Dashbaord {...this.props} />
          }} />
        </div>
      </Router>

    )
  }
}

App.propTypes = {
}

App.defaultProps = {

}

export default App
