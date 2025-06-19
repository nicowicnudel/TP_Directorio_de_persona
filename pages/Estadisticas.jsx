import personas from '../data/personas'

function Estadisticas() {
  const total = personas.length

  const mayoresDe35 = personas.filter(p => p.edad > 35).length

  const edades = personas.map(p => p.edad)
  const maxEdad = Math.max(...edades)
  const minEdad = Math.min(...edades)

  const personasMayorEdad = personas.filter(p => p.edad === maxEdad)
  const personasMenorEdad = personas.filter(p => p.edad === minEdad)

  const promedio = (edades.reduce((a, b) => a + b, 0) / total).toFixed(2)

  return (
    <div>
      <h2>Estadísticas Generales</h2>

      <ul>
        <li><strong>Total de personas:</strong> {total}</li>
        <li><strong>Mayores de 35 años:</strong> {mayoresDe35}</li>
        <li>
          <strong>Persona(s) de mayor edad ({maxEdad} años):</strong>
          <ul>
            {personasMayorEdad.map(p => (
              <li key={p.id}>{p.nombre} {p.apellido}</li>
            ))}
          </ul>
        </li>
        <li>
          <strong>Persona(s) de menor edad ({minEdad} años):</strong>
          <ul>
            {personasMenorEdad.map(p => (
              <li key={p.id}>{p.nombre} {p.apellido}</li>
            ))}
          </ul>
        </li>
        <li><strong>Promedio de edad:</strong> {promedio}</li>
      </ul>
    </div>
  )
}

export default Estadisticas
