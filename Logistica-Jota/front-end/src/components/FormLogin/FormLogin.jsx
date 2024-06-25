import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./FormLogin.css"
import toast, { Toaster } from 'react-hot-toast'
import { login } from '../../services/auth'
import { getClientInformation } from '../../services/clientInformation'

const FormSignup = () => {
  const [CIF, setCIF] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()

  const handleLogin= async () => {
    try {
      let data = { CIF: CIF, password: password }
      const result = await login(data)
      localStorage.setItem('token', result.token)
      const {role} = await getClientInformation();
      (role==="client"? navigate("/HomeClient") : navigate("/HomeAdmin"))
       
    }catch(error) {
      toast.error('Credenciales inválidas')
    }
  }

  return (
    <>
      <Toaster />
      <main id='formMain'>
      <form action="">
        <h2>Acceda a su cuenta</h2>

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
          className="button pulse-effect"
          onClick={(e) => {
            e.preventDefault()
            handleLogin()
          }}
        >
          Iniciar sesión
        </button>
      </form>
      </main>
    </>
  )
}

export default FormSignup
