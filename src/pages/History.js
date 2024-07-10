import React, { useState } from 'react';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './History.css';
import { Link } from 'react-router-dom';

const History = () => {
  const [date, setDate] = useState(new Date());
  const [exercises, setExercises] = useState([
    { name: 'Military Press', sets: '225 X 10', reps: '225 X 8', weight: '225 X 6' }
  ]);
  const [newExercise, setNewExercise] = useState({ name: '', sets: '', reps: '', weight: '' });

  const addExercise = () => {
    setExercises([...exercises, newExercise]);
    setNewExercise({ name: '', sets: '', reps: '', weight: '' });
  };

  const deleteExercise = (index) => {
    const updatedExercises = exercises.filter((_, i) => i !== index);
    setExercises(updatedExercises);
  };

  return (
    <div className="history-page">
      <header className="header">
        <h1>History</h1>
      </header>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <div className="exercises-list">
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise-item">
            <p>{exercise.name}</p>
            <p>{exercise.sets}</p>
            <p>{exercise.reps}</p>
            <p>{exercise.weight}</p>
            <FaTrashAlt className="delete-icon" onClick={() => deleteExercise(index)} />
          </div>
        ))}
      </div>
      <div className="new-exercise-form">
        <input
          type="text"
          placeholder="Exercise Name"
          value={newExercise.name}
          onChange={(e) => setNewExercise({ ...newExercise, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Sets"
          value={newExercise.sets}
          onChange={(e) => setNewExercise({ ...newExercise, sets: e.target.value })}
        />
        <input
          type="text" 
          placeholder="Reps"
          value={newExercise.reps}
          onChange={(e) => setNewExercise({ ...newExercise, reps: e.target.value })}
        />
        <input
          type="text"
          placeholder="Weight"
          value={newExercise.weight}
          onChange={(e) => setNewExercise({ ...newExercise, weight: e.target.value })}
        />
        <FaPlus className="add-icon" onClick={addExercise} />
        <button id='blues'><Link to="/Records">MY RECORDS</Link></button>
      </div>
    </div>
  );
};

export default History;
