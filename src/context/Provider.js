import React, { Component } from 'react';
import CarsContext from './CarsContext';

class Provider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cars: {
        redCar: false,
        blueCar: false,
        yellowCar: false,
      },
    }

    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  };

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
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