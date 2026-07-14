import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    Age: '',
    Annual_Income: '',
    Spending_Score: ''
  })
  
  const [cluster, setCluster] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setCluster(null)

    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Age: parseInt(formData.Age),
          Annual_Income: parseFloat(formData.Annual_Income),
          Spending_Score: parseFloat(formData.Spending_Score)
        })
      })

      if (!response.ok) {
        throw new Error('Prediction failed')
      }

      const data = await response.json()
      setCluster(data.cluster)
    } catch (err) {
      setError('Failed to connect to the backend API or predict cluster.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-container">
      <h1>Customer Segments</h1>
      <p className="subtitle">AI-Powered K-Means Clustering</p>

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
              min="0"
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
              step="any"
              min="0"
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
              step="any"
              min="0"
              max="100"
            />
          </div>

          <button className="submit-btn" type="submit" disabled={loading}>
            {loading ? 'Predicting...' : 'Predict Segment'}
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {cluster !== null && (
          <div className="result-container">
            <h2>Segment {cluster}</h2>
            <p>This customer belongs to cluster {cluster}.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
