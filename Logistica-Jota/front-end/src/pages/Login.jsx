import { useNavigate } from 'react-router-dom'

const Login = () => {
      const navigate = useNavigate()

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => navigate('/')}>Volver</button>
    </div>
  )
}

export default Login
