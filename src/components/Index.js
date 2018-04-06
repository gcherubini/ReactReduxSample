import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import ReactComponent from './ReactComponent'
import { ReactStatelessComponent } from './ReactStatelessComponent'

class Index extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <ReactComponent name="ComponentNameViaProps" />
        <ReactStatelessComponent name="ComponentNameViaProps" />

      </div>
    )
  }
}

export default Index
