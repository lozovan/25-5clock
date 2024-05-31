import React from 'react';

function SessionControl({ sessionLength, setSessionLength, isRunning }) {
  const decrementSession = () => {
    if (sessionLength > 1 && !isRunning) {
      setSessionLength(sessionLength - 1);
    }
  };

  const incrementSession = () => {
    if (sessionLength < 60 && !isRunning) {
      setSessionLength(sessionLength + 1);
    }
  };

  return (
    <div>
      <button id="session-decrement" onClick={decrementSession}>-</button>
      <span id="session-length">{sessionLength}</span>
      <button id="session-increment" onClick={incrementSession}>+</button>
    </div>
  );
}

export default SessionControl;