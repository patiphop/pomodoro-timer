import React from 'react';

function Settings({ workDuration, breakDuration, setWorkDuration, setBreakDuration, darkMode, setDarkMode }) {
  const handleSoundTest = () => {
    const audio = new Audio(`${process.env.PUBLIC_URL}/beep.mp3`);
    audio.play();
  };

  return (
    <div className="settings">
      <h3>Settings</h3>
      <div>
        <label>Work Duration (minutes):
          <input
            type="number"
            value={workDuration}
            onChange={(e) => setWorkDuration(parseInt(e.target.value) || 1)}
            min="1"
          />
        </label>
      </div>
      <div>
        <label>Break Duration (minutes):
          <input
            type="number"
            value={breakDuration}
            onChange={(e) => setBreakDuration(parseInt(e.target.value) || 1)}
            min="1"
          />
        </label>
      </div>
      <div>
        <label>Dark Mode:
          <input
            type="checkbox"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
          />
        </label>
      </div>
      <div>
        <button onClick={handleSoundTest}>Test Sound</button>
      </div>
    </div>
  );
}

export default Settings;
