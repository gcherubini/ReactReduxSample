import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeCar } from '../redux/actions/CarActions'

const CarReduxItem = (props) =>  (
      <div>
        <p> {props.item} 
          <a style={{color: 'red'}} onClick={(e) => props.removeCar(props.item)}>  - </a> 
        </p> 
      </div>
)

const mapDispatchToProps = dispatch => ({ 
  removeCar: (car) => {
      dispatch(removeCar(car))
  }}
)

export default connect(null, mapDispatchToProps)(CarReduxItem)