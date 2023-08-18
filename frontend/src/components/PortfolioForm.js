import { useState } from 'react'
import { usePortfoliosContext } from "../hooks/usePortfoliosContext"


const PortfolioForm = () => {
  const { dispatch } = usePortfoliosContext()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAdress] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const portfolio = {title, description, address}
    
    const response = await fetch('/api/portfolios', {
      method: 'POST',
      body: JSON.stringify(portfolio),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setDescription('')
      setAdress('')
      console.log('new portfolio added:', json)
      dispatch({type: 'CREATE_PORTFOLIO', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Portfolio</h3>

      <label>Project Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>Description(detail of your project):</label>
      <input 
        type="text" 
        onChange={(e) => setDescription(e.target.value)} 
        value={description}
      />

      <label>Address:</label>
      <input 
        type="text" 
        onChange={(e) => setAdress(e.target.value)} 
        value={address} 
      />

      <button>Add Portfolio</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default PortfolioForm