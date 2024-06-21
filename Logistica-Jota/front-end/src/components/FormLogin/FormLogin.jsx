import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./FormLogin.css"
import toast, { Toaster } from 'react-hot-toast'
import { login } from '../../services/auth'

const FormSignup = () => {
  const [CIF, setCIF] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()

  const handleLogin= async () => {
    try {
      let data = { CIF: CIF, password: password }
      const result = await login(data)
      localStorage.setItem('token', result.token)
      navigate("/HomeClient") 
    }catch(error) {
      toast.error('Credenciales inválidas')
    }
  }

  return (
    <>
      <Toaster />
      <form action="">
        <h2>Iniciar sesion</h2>

        <div>
          <label>CIF</label>
          <input
            onChange={(e) => {
              setCIF(e.target.value)
            }}
            required
            placeholder="Introduce tu CIF"
          />
        </div>

        <div>
          <label htmlFor="">Contraseña</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required
            placeholder="Introduce tu contraseña"
          />
        </div>

        <button
          onClick={(e) => {
            e.preventDefault()
            handleLogin()
          }}
        >
          Iniciar sesión
        </button>
      </form>
    </>
  )
}

export default FormSignup
