import FormSignup from '../components/FormSignup'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()

  const redirect = () => {
    navigate('/')
  }

  return (
    <div>
      <FormSignup />
    </div>
  )
}

export default SignUp