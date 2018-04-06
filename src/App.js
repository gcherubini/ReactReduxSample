import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ReactComponent from './components/ReactComponent'
import { ReactStatelessComponent } from './components/ReactStatelessComponent'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './redux/Store'
import Index from './components/Index'
import Cars from './components/Cars'

class App extends Component {
  render() {
    console.log(Store.getState())
    return (
      <Provider store={Store}>
        <Router>
          <Switch> 
            <Route exact path="/" component={Index} />
            <Route exact path="/cars" component={Cars} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
