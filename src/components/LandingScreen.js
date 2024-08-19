import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingScreen() {
  const navigate = useNavigate();

  return (
    <div className="landing-screen">
      <h1>Welcome to SeeMD eConsult</h1>
      <button onClick={() => navigate('/select-patient')}>Select a Virtual Doorway</button>
    </div>
  );
}

export default LandingScreen;
