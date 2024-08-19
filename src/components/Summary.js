import React from 'react';

function Summary() {
  const randomResponses = [
    "Based on the data, further testing is recommended.",
    "The symptoms are consistent with a mild condition.",
    "Further evaluation by a specialist is suggested."
  ];
  
  const randomResponse = randomResponses[Math.floor(Math.random() * randomResponses.length)];

  return (
    <div className="summary">
      <h2>Summary of Your Consultation</h2>
      <p>{randomResponse}</p>
      <button>Finalize and Send to Specialist</button>
    </div>
  );
}

export default Summary;
