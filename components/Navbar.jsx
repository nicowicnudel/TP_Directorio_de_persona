import { NavLink } from 'react-router-dom'
import './Navbar.css' // estilos separados

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <NavLink to='/' style={{ marginRight: '1rem' }}>Inicio</NavLink>
      <NavLink to='/estadisticas' style={{ marginRight: '1rem' }}>Estadísticas</NavLink>
      <NavLink to='/contacto'>Contacto</NavLink>
    </nav>
  )
}

export default Navbar
