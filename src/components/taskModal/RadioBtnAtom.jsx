import React from 'react';

const RadioBtnAtom = ({ status, setStatus }) => {
    const statuses = ["To-do", "Doing", "Done"]; 
  
    return (
      <fieldset>
        <legend>Task status:</legend>
        {statuses.map((option) => (
          <div key={option}>
            <input 
              type="radio" 
              id={`status${option}`} 
              name="taskStatus" 
              value={option} 
              checked={status === option} 
              onChange={(e) => setStatus(e.target.value)} 
            />
            <label htmlFor={`status${option}`}>{option}</label>
          </div>
        ))}
      </fieldset>
    );
  };
  
  export default RadioBtnAtom;
  