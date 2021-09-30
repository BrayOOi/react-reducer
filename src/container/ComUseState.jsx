import React, {useState} from 'react';

const ComUseState = () => {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(state => state + 1);
  }

  const minusCounter = () => {
    setCounter(state => state - 1);
  }

  return (
    <div className="useState-container example">
      <h2>I use useState</h2>

      <div className="content">
        <p>{counter}</p>
        <div className="btn-container">
          <input
            type="button"
            className="btn"
            value="+"
            onClick={addCounter} />

          <input
            type="button"
            className="btn"
            value="-"
            onClick={minusCounter} />
        </div>
      </div>
    </div>
  );
};

export default ComUseState;
