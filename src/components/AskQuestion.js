import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AskQuestion() {
  const navigate = useNavigate();
  const [question, setQuestion] = useState('');
  
  return (
    <div className="ask-question">
      <h2>Ask a Question</h2>
      <textarea 
        placeholder="Type your question here..." 
        value={question} 
        onChange={(e) => setQuestion(e.target.value)} 
      />
      <button onClick={() => navigate('/summary')}>Submit</button>
    </div>
  );
}

export default AskQuestion;
