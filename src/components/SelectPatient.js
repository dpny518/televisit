import React from 'react';
import { useNavigate } from 'react-router-dom';

function SelectPatient() {
  const navigate = useNavigate();

  return (
    <div className="select-patient">
      <h2>Select a Patient</h2>
      <button onClick={() => navigate('/select-specialty')}>Patient 1</button>
      <button onClick={() => navigate('/select-specialty')}>Patient 2</button>
    </div>
  );
}

export default SelectPatient;
