import { useState } from 'react'
import './index.css'

function App() {
  const [formData, setFormData] = useState({
    Age: '',
    Annual_Income: '',
    Spending_Score: ''
  })
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Age: parseInt(formData.Age),
          Annual_Income: parseFloat(formData.Annual_Income),
          Spending_Score: parseFloat(formData.Spending_Score)
        })
      })

      if (!response.ok) {
        throw new Error('Failed to get prediction from server')
      }

      const data = await response.json()
      setResult(data.cluster)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-container">
      <h1>Customer Segments</h1>
      <p className="subtitle">Hierarchical Clustering AI</p>

      <div className="glass-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Age">Age</label>
            <input
              type="number"
              id="Age"
              name="Age"
              value={formData.Age}
              onChange={handleChange}
              required
              min="10"
              max="100"
              placeholder="e.g. 25"
            />
          </div>

          <div className="form-group">
            <label htmlFor="Annual_Income">Annual Income (k$)</label>
            <input
              type="number"
              id="Annual_Income"
              name="Annual_Income"
              value={formData.Annual_Income}
              onChange={handleChange}
              required
              min="0"
              step="any"
              placeholder="e.g. 50"
            />
          </div>

          <div className="form-group">
            <label htmlFor="Spending_Score">Spending Score (1-100)</label>
            <input
              type="number"
              id="Spending_Score"
              name="Spending_Score"
              value={formData.Spending_Score}
              onChange={handleChange}
              required
              min="1"
              max="100"
              step="any"
              placeholder="e.g. 75"
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Analyzing...' : 'Show Result'}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}

        {result !== null && (
          <div className="result-container">
            <h2>Cluster Segment: {result}</h2>
            <p>Based on the hierarchical structure</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
