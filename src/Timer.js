import React from 'react';

function Timer({ timeLeft, handleStartStop, handleReset, isSession, isRunning }) {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <div>
      <div id="timer-label">{isSession ? 'Session' : 'Break'}</div>
      <div id="time-left">{formatTime(timeLeft)}</div>
      <button id="start_stop" onClick={handleStartStop}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button id="reset" onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Timer;