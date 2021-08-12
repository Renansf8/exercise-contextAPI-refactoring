import React, { Component } from 'react';
import CarsContext from './CarsContext';

class Provider extends Component {
  constructor() {
    super()

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: { 
        color: 'red' 
      },
    }
    this.moveCar = this.moveCar.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(newColor) {
    this.setState({
      signal: {
        ...this.state,
        color: newColor,
      }
    })
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state,
        [car]: side
      }
    });
  }

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeColor: this.changeColor,
    }

    const { children } = this.props;

    return(
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
  }
}

export default Provider;