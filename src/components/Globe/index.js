import React, { Component } from 'react';
import CountryGame from './countryGame';
import worldImg from '../../Resources/images/istock-175205370.jpg';



class Flag extends Component {
  render() {
    return (
      <div className="flag-app">
        <header
          className="title-header"
          style={{ backgroundImage: `url(${worldImg})` }}>
          <h1 className="title-text">Guess The Flag</h1>
        </header>
        <CountryGame />
      </div>
    );
  }
}

export default Flag;
