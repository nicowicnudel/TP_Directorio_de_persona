// src/pages/Home.jsx
import { useState, useEffect } from 'react'
import personasData from '../data/personas'
import PersonaCard from '../components/PersonaCard'

function Home() {
  const [personas, setPersonas] = useState([])

  useEffect(() => {
    setPersonas(personasData)
  }, [])

  return (
    <div>
      <h1>Directorio de Personas</h1>
      {personas.map(persona => (
        <PersonaCard key={persona.id} persona={persona} />
      ))}
    </div>
  )
}

export default Home
