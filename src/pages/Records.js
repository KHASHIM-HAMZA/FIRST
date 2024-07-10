import React, { useState } from 'react';
import './Records.css';

const Records = () => {
  const [search, setSearch] = useState('');
  const exercises = [
    { name: 'Military Press', weight: 145 },
    // Add more exercises as needed
  ];

  const filteredExercises = exercises.filter(exercise =>
    exercise.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="records-page">
      <header className="header">
        <h1>Records</h1>
      </header>
      <input
        type="text"
        placeholder="Find exercise"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="exercises-list">
        {filteredExercises.map((exercise, index) => (
          <div key={index} className="exercise-item">
            <span>{exercise.name}</span>
            <span>{exercise.weight} lbs</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Records;
