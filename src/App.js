import React, { useState, useEffect, useRef } from 'react';
import BreakControl from './BreakControl';
import SessionControl from './SessionControl';
import Timer from './Timer';
import './App.css';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(1500); // in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isSession, setIsSession] = useState(true);
  const [intervalId, setIntervalId] = useState(null);
  const beepRef = useRef();

  useEffect(() => {
    if (timeLeft === 0) {
      beepRef.current.play();
      if (isSession) {
        setTimeLeft(breakLength * 60);
        setIsSession(false);
      } else {
        setTimeLeft(sessionLength * 60);
        setIsSession(true);
      }
    }
  }, [timeLeft, isSession, breakLength, sessionLength]);

  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    } else {
      setIsRunning(true);
      const newIntervalId = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setIsRunning(false);
    setIsSession(true);
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(1500);
    beepRef.current.pause();
    beepRef.current.currentTime = 0;
  };

  return (
    <div className="App">
      <div id="break-label">Break Length</div>
      <BreakControl
        breakLength={breakLength}
        setBreakLength={setBreakLength}
        isRunning={isRunning}
      />
      <div id="session-label">Session Length</div>
      <SessionControl
        sessionLength={sessionLength}
        setSessionLength={setSessionLength}
        isRunning={isRunning}
      />
      <Timer
        timeLeft={timeLeft}
        handleStartStop={handleStartStop}
        handleReset={handleReset}
        isSession={isSession}
        isRunning={isRunning}
      />
      <audio id="beep" ref={beepRef} src="https://www.soundjay.com/button/sounds/beep-07.wav" />
    </div>
  );
}

export default App;