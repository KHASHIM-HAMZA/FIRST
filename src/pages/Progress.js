import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './Progress.css';

const Progress = () => {
  const [exerciseData, setExerciseData] = useState({
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Weight',
        data: [200, 220, 210, 230],
        fill: false,
        borderColor: '#00ff00',
      },
    ],
  });

  const handleExerciseChange = (event) => {
    const newData = {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          label: 'Weight',
          data: event.target.value === 'Military Press' ? [200, 220, 210, 230] : [100, 150, 200, 250],
          fill: false,
          borderColor: '#00ff00',
        },
      ],
    };
    setExerciseData(newData);
  };

  return (
    <div className="progress-page">
      <header className="header">
        <h1>Progress</h1>
      </header>
      <div className="chart-container">
        <Line data={exerciseData} />
      </div>
      <select onChange={handleExerciseChange} className="select-exercise">
        <option value="Military Press">Military Press</option>
        <option value="Bench Press">Bench Press</option>
      </select>
      
    </div>
  );
};

export default Progress;
