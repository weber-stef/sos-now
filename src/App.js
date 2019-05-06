import React, { Component } from 'react';
import Title from "./Components/Title";
import Searchandfilter from "./Components/Searchandfilter";
import Content from "./Components/Content"

export default class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Searchandfilter />
        <Content />


      </div>
    )
  }
}



