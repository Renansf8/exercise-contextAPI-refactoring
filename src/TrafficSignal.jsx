// src/TrafficSignal.jsx

import React from 'react';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import { Component } from 'react';
import CarsContext from './context/CarsContext';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

class TrafficSignal extends Component {
  render() {
    const { color } = this.context.signal;
    const { changeColor } = this.context;

    return (
      <div>
      <div className="button-container">
        <button onClick={() => changeColor('red')} type="button">
          Red
        </button>
        <button onClick={() => changeColor('yellow')} type="button">
          Yellow
        </button>
        <button onClick={() => changeColor('green')} type="button">
          Green
        </button>
      </div>
      <img className="signal" src={renderSignal(color)} alt="" />
    </div>
  );
}
};

TrafficSignal.contextType = CarsContext;

export default TrafficSignal;
