import React from 'react';
import './App.css';
import ComUseState from './container/ComUseState';
import ComUseReducer from './container/ComUseReducer';
import ComUseRedux from './container/ComUseRedux';

const App = () => {

  return (
    <>
      <header>Code Comparison between useState, useReducer and Redux</header>
      <div className="content-container">
        <ComUseState />

        <ComUseReducer />

        <ComUseRedux />
      </div>
    </>
  );
};

export default App;
