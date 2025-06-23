import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import DetallePersona from './pages/DetallePersona'
import Estadisticas from './pages/Estadisticas'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='persona/:id' element={<DetallePersona />} />
        <Route path='estadisticas' element={<Estadisticas />} />
        <Route path='contacto' element={<Contacto />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
