import { useParams } from 'react-router-dom'
import personas from '../data/personas'

function DetallePersona() {
  const { id } = useParams()
  const persona = personas.find(p => p.id === parseInt(id))

  if (!persona) {
    return <p style={{ color: 'red' }}>Persona no encontrada 🕵️‍♂️</p>
  }

  const mensaje = persona.edad >= 18 ? "Mayor de edad" : "Menor de edad"

  return (
    <div>
      <h2>Detalle de {persona.nombre} {persona.apellido}</h2>
      <p><strong>Edad:</strong> {persona.edad}</p>
      <p><strong>Email:</strong> {persona.email}</p>
      <p><em>{mensaje}</em></p>
    </div>
  )
}

export default DetallePersona
