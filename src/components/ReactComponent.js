import React, { Component } from 'react'

class ReactComponent extends Component {
  render() {
    const { name } = this.props 

    return (
      <div>
        <p> React Component {name} </p> 
      </div>
    )
  }
}

export default ReactComponent
