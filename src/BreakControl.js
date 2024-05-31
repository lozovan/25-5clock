import React from 'react';

function BreakControl({ breakLength, setBreakLength, isRunning }) {
  const decrementBreak = () => {
    if (breakLength > 1 && !isRunning) {
      setBreakLength(breakLength - 1);
    }
  };

  const incrementBreak = () => {
    if (breakLength < 60 && !isRunning) {
      setBreakLength(breakLength + 1);
    }
  };

  return (
    <div>
      <button id="break-decrement" onClick={decrementBreak}>-</button>
      <span id="break-length">{breakLength}</span>
      <button id="break-increment" onClick={incrementBreak}>+</button>
    </div>
  );
}

export default BreakControl;