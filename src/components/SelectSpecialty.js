import React from 'react';
import { useNavigate } from 'react-router-dom';

function SelectSpecialty() {
  const navigate = useNavigate();

  return (
    <div className="select-specialty">
      <h2>Select a Specialty</h2>
      <button onClick={() => navigate('/ask-question')}>Cardiology</button>
      <button onClick={() => navigate('/ask-question')}>Dermatology</button>
    </div>
  );
}

export default SelectSpecialty;
