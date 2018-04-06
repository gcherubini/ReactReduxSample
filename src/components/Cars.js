import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import ReactComponent from './ReactComponent'
import CarReduxItem from './CarReduxItem'
import { connect } from 'react-redux'
import { addCar } from '../redux/actions/CarActions'

class Cars extends Component {

  addRandomCar = () => {
    const cars = ["Ford", "Wolkswagen", "Pegeout", "Mitsubishi", "BMW", "Mercedes", "Volvo", "Fiat", "Hyundai", "Honda", "Chevrolet"] 
    this.props.addCar( cars[Math.floor(Math.random() * cars.length)] )
  }

  render() {
    const { cars } = this.props

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Available Cars</h1>
        </header>

        <p> 
          <a style={{fontSize: '30px'}} onClick={this.addRandomCar}> + </a>
        </p> 

        {cars.map(
          carName => <CarReduxItem item={carName} key={carName} />
        )}

      </div>
    )
  }
}

const mapStateToProps = state => ({ 
  cars: state.carReducer.cars 
})

const mapDispatchToProps = dispatch => ({ 
  addCar: (car) => {
      dispatch(addCar(car))
  }}
)

export default connect(mapStateToProps, mapDispatchToProps)(Cars)