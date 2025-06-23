import { useNavigate } from 'react-router-dom'

function PersonaCard({ persona }) {
  const navigate = useNavigate()

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      marginBottom: '1rem',
      borderRadius: '8px'
    }}>
      <h3>{persona.nombre} {persona.apellido}</h3>
      <p>Edad: {persona.edad}</p>
      <button onClick={() => navigate(`/persona/${persona.id}`)}>
        Ver más
      </button>
    </div>
  )
}

export default PersonaCard
