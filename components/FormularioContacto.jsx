import { useState } from 'react'

function FormularioContacto() {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    edad: ''
  })

  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrores({ ...errores, [e.target.name]: '' })
  }

  const validar = () => {
    const newErrors = {}

    if (!form.nombre.trim()) newErrors.nombre = 'Nombre requerido'
    if (!form.apellido.trim()) newErrors.apellido = 'Apellido requerido'
    if (!form.email.trim()) {
      newErrors.email = 'Email requerido'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email inválido'
    }

    const edadNum = parseInt(form.edad)
    if (!form.edad.trim()) {
      newErrors.edad = 'Edad requerida'
    } else if (isNaN(edadNum) || edadNum <= 0) {
      newErrors.edad = 'Edad debe ser un número positivo'
    }

    return newErrors
  }

  const handleSubmit = e => {
    e.preventDefault()
    const validados = validar()

    if (Object.keys(validados).length > 0) {
      setErrores(validados)
      return
    }

    setEnviado(true)
    setForm({ nombre: '', apellido: '', email: '', edad: '' })
  }

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      {enviado && <p style={{ color: 'green' }}>¡Formulario enviado con éxito! 🎉</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label><br />
          <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />
          {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
        </div>

        <div>
          <label>Apellido:</label><br />
          <input type="text" name="apellido" value={form.apellido} onChange={handleChange} />
          {errores.apellido && <p style={{ color: 'red' }}>{errores.apellido}</p>}
        </div>

        <div>
          <label>Email:</label><br />
          <input type="email" name="email" value={form.email} onChange={handleChange} />
          {errores.email && <p style={{ color: 'red' }}>{errores.email}</p>}
        </div>

        <div>
          <label>Edad:</label><br />
          <input type="number" name="edad" value={form.edad} onChange={handleChange} />
          {errores.edad && <p style={{ color: 'red' }}>{errores.edad}</p>}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default FormularioContacto
