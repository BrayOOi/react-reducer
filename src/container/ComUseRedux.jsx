import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ComUseRedux = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  return (
    <div className="useRedux-container example">
      <h2>I use Redux</h2>
      
      <div className="content">
        <p>{counter}</p>
        <div className="btn-container">
          <input
            type="button"
            className="btn"
            value="+"
            onClick={() => dispatch({ type: 'click/add' })} />

          <input
            type="button"
            className="btn"
            value="-"
            onClick={() => dispatch({ type: 'click/minus' })} />
        </div>
      </div>   
    </div>
  );
};

export default ComUseRedux;
