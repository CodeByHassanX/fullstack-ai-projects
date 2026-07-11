import React, { useState } from 'react';
import axios from 'axios';
import "./App.css"

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState(null); 
  const [loading, setLoading] = useState(false);

  const predict_score = async (e) => {
    e.preventDefault();
    if (!input1 || !input2) return;
    
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8000/predict', {
        feature1: parseFloat(input1) || input1,
        feature2: parseFloat(input2) || input2
      });
      setResult(response.data.prediction);
    } catch(error) {
      alert("Error connecting to API. Is the FastAPI backend running?");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <h2>MedAI Diagnostic</h2>
        <div>
          <span style={{ color: "#94a3b8", fontSize: "0.9rem", fontWeight: "600" }}>Powered by PCA & Logistic Regression</span>
        </div>
      </nav>

      <main className="main-layout">
        <div className="hero-section">
          <h1>Advanced Breast Cancer Prediction</h1>
          <p>
            Our machine learning model leverages Principal Component Analysis (PCA) to intelligently compress complex clinical cell features into 2 primary diagnostic components. 
            Enter your patient's PCA values below to receive an instant, AI-driven diagnostic assessment.
          </p>
          <div style={{ display: "flex", gap: "12px", color: "#e2e8f0", fontSize: "0.85rem", marginTop: "25px", fontWeight: "600", flexWrap: "wrap", justifyContent: "flex-start" }}>
            <span style={{ background: "rgba(255,255,255,0.1)", padding: "8px 16px", border: "none", borderRadius: "20px" }}>🐍 FastAPI Backend</span>
            <span style={{ background: "rgba(255,255,255,0.1)", padding: "8px 16px", border: "none", borderRadius: "20px" }}>⚛️ React Frontend</span>
            <span style={{ background: "rgba(255,255,255,0.1)", padding: "8px 16px", border: "none", borderRadius: "20px" }}>⚙️ Scikit-Learn</span>
          </div>
        </div>

        <div className="glass-card">
          <form onSubmit={predict_score}>
            <div className="input-group">
              <label>Principal Component 1</label>
              <input 
                type="number" 
                step="any"
                placeholder="e.g. 5.2" 
                value={input1} 
                onChange={(e) => setInput1(e.target.value)} 
                required
              />
            </div>
            
            <div className="input-group">
              <label>Principal Component 2</label>
              <input 
                type="number" 
                step="any"
                placeholder="e.g. -1.8" 
                value={input2} 
                onChange={(e) => setInput2(e.target.value)} 
                required
              />
            </div>
            
            <button type="submit" className="predict-btn" disabled={loading}>
              {loading ? "Analyzing Clinical Data..." : "Run AI Diagnostic"}
            </button>
          </form>

          {result !== null && (
            <div className={`result-box ${result === "Malignant" ? "malignant" : "benign"}`}>
              <p>Diagnostic Assessment</p>
              <h2>{result}</h2>
              {result === "Malignant" ? (
                <p style={{marginTop: "8px", color: "#fca5a5", fontSize: "0.85rem", fontWeight: "600"}}>⚠️ Immediate medical review recommended.</p>
              ) : (
                <p style={{marginTop: "8px", color: "#86efac", fontSize: "0.85rem", fontWeight: "600"}}>✅ No immediate signs of malignancy detected.</p>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
} 

export default App;
