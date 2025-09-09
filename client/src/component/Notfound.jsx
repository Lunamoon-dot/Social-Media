import React from 'react'
import { useNavigate } from 'react-router-dom'

function Notfound() {
  const navigate = useNavigate()
  
  return (
    <div>
      <p>
        Not Found
      </p>
      <button onClick={() => navigate('/')}>Return to Home Page</button>
    </div>
  )
}

export default Notfound