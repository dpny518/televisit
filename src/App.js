import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingScreen from './components/LandingScreen';
import SelectPatient from './components/SelectPatient';
import SelectSpecialty from './components/SelectSpecialty';
import AskQuestion from './components/AskQuestion';
import Summary from './components/Summary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/select-patient" element={<SelectPatient />} />
        <Route path="/select-specialty" element={<SelectSpecialty />} />
        <Route path="/ask-question" element={<AskQuestion />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </Router>
  );
}

export default App;
