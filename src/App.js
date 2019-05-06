import React from 'react';
import Title from './Components/Title';
import './App.css';
import Search from './Components/Search';
import Filter from './Components/Filter';
import Content from './Components/Content';

function App() {
  return (
    <wrapper>
      <Title />
      <Search />
      <Filter />
      <Content />

    </wrapper>
  );
}

export default App;
