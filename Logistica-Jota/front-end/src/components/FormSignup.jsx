import { useState } from 'react'
//import { signup } from '../service/auth'
import { useNavigate } from 'react-router-dom'

const FormSignup = () => {
  const [CIF, setCIF] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()


  const handleSignUp = async () => {

    navigate('/login')
    /* let data = { CIF: CIF, password: password }
    //const result = await signup(data)
    localStorage.setItem('CIF', result.CIF)
    localStorage.setItem('token', result.token)
    localStorage.setItem('role', result.role)
    setEmail('') */
  }

  return (
    <div>
      <form action="">
        <input
          onChange={(e) => {
            setCIF(e.target.value)
          }}
          required
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          required
        />

        <button
          onClick={(e) => {
            e.preventDefault()
            handleSignUp()
          }}
        >
          Registrarse
        </button>
      </form>
    </div>
  )
}

export default FormSignup
