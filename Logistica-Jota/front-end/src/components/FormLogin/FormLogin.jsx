import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./FormLogin.css"

const FormSignup = () => {
  const [CIF, setCIF] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()

  const handleSignUp = async () => {
    navigate('/')
    /* let data = { CIF: CIF, password: password }
    //const result = await signup(data)
    localStorage.setItem('CIF', result.CIF)
    localStorage.setItem('token', result.token)
    localStorage.setItem('role', result.role)
    setEmail('') */
  }

  return (
    <>
      <form action="">
        <h1>Iniciar sesion</h1>
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
            handleSignUp()
          }}
        >
          Registrarse
        </button>
      </form>
    </>
  )
}

export default FormSignup
