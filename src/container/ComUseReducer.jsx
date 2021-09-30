import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case 'click/add':
      return state + 1;
    case 'click/minus':
      return state - 1;
    default:
      return state;
  }
};

const ComUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="useReducer-container example">
      <h2>I use useReducer</h2>

      <div className="content">
        <p>{state}</p>
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

export default ComUseReducer;
