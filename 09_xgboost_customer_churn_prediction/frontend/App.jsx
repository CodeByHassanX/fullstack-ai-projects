import React, { useState } from 'react';
import axios from 'axios';
import "./App.css"

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState(null); 
  const [loading, setLoading] = useState(false);

  const predict_score = async (e) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8000/predict', {
        feature1: parseFloat(input1) || input1,
        feature2: parseFloat(input2) || input2
      });
      setResult(response.data.prediction);
    } catch(error) {
      alert("Error connecting to api");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card"> 
        <h1>🤖 Machine Learning Predictor</h1>
        <p> Enter details and predict the outcome using Machine Learning. </p>
        <input type="text" placeholder="Feature 1" value={input1} onChange={(e) => setInput1(e.target.value)} />
        <input type="text" placeholder="Feature 2" value={input2} onChange={(e) => setInput2(e.target.value)} />
        <button onClick={predict_score}>
          {loading ? "Predicting..." : "Predict"}
        </button>
        {result !== null && (
          <div className="result">
            <h2>Prediction</h2>
            <h1>{result}</h1>
          </div>
        )}
      </div> 
    </div>
  );
} 

export default App;
