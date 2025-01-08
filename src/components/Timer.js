import React, { useState, useEffect, useRef } from 'react';

function Timer({ workDuration, breakDuration, onSessionComplete }) {
  const [isRunning, setIsRunning] = useState(false);
  const [isWork, setIsWork] = useState(true);
  const [timeLeft, setTimeLeft] = useState(workDuration * 60);
  const timerRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    setTimeLeft(isWork ? workDuration * 60 : breakDuration * 60);
  }, [workDuration, breakDuration, isWork]);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            playSound();
            if (isWork) {
              onSessionComplete();
            }
            setIsWork(prevIsWork => !prevIsWork);
            return isWork ? breakDuration * 60 : workDuration * 60;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning, isWork, breakDuration, workDuration, onSessionComplete]);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div>
      <h2>{isWork ? 'Work' : 'Break'} Time</h2>
      <div className="timer-display">{formatTime(timeLeft)}</div>
      <div>
        {!isRunning ? (
          <button onClick={() => setIsRunning(true)}>Start</button>
        ) : (
          <button onClick={() => setIsRunning(false)}>Pause</button>
        )}
        <button onClick={() => {
          setIsRunning(false);
          setIsWork(true);
          setTimeLeft(workDuration * 60);
        }}>Reset</button>
      </div>
      <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/beep.mp3`} />
    </div>
  );
}

export default Timer;
