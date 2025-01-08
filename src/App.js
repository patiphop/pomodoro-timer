import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';
import Settings from './components/Settings';
import Statistics from './components/Statistics';

function App() {
  const [workDuration, setWorkDuration] = useState(
    parseInt(localStorage.getItem('workDuration')) || 25
  );
  const [breakDuration, setBreakDuration] = useState(
    parseInt(localStorage.getItem('breakDuration')) || 5
  );
  const [sessions, setSessions] = useState(
    parseInt(localStorage.getItem('sessions')) || 0
  );
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' || false
  );

  useEffect(() => {
    localStorage.setItem('workDuration', workDuration);
    localStorage.setItem('breakDuration', breakDuration);
    localStorage.setItem('sessions', sessions);
    localStorage.setItem('darkMode', darkMode);
  }, [workDuration, breakDuration, sessions, darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <h1>Pomodoro Timer</h1>
      <Timer
        workDuration={workDuration}
        breakDuration={breakDuration}
        onSessionComplete={() => setSessions(prev => prev + 1)}
      />
      <Settings
        workDuration={workDuration}
        breakDuration={breakDuration}
        setWorkDuration={setWorkDuration}
        setBreakDuration={setBreakDuration}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Statistics sessions={sessions} />
    </div>
  );
}

export default App;
