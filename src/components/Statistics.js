import React from 'react';

function Statistics({ sessions }) {
  return (
    <div className="statistics">
      <h3>Statistics</h3>
      <p>Completed Pomodoro Sessions: {sessions}</p>
    </div>
  );
}

export default Statistics;
