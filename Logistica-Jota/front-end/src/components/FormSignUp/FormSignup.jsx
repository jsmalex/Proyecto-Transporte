import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './FormSignUp.css'
import toast, { Toaster } from 'react-hot-toast'
import { signUp } from '../../services/auth'

const FormSignup = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [CIF, setCIF] = useState('')
  const [address, setAddress] = useState('')
  const [CP, setCP] = useState('')
  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')

  const navigate = useNavigate()

  const handleSignUp = async () => {
    if (
      name.length === 0 ||
      password.length === 0 ||
      CIF.length === 0 ||
      address.length === 0 ||
      CP.length === 0 ||
      city.length === 0 ||
      province.length === 0
    ) {
      return toast.error('Introduce todos los campos del formulario')
    }

    try {
      const data = {
        name: name,
        password: password,
        CIF: CIF,
        address: address,
        CP: CP,
        city: city,
        province: province,
      }
      const result = await signUp(data)
      localStorage.setItem('token', result.token)
      navigate('/RegisterOK', { state: { registered: true } }) //Con esta linea redirecciono a RegisterOK y mando el valor TRUE en una variable registered que podre usar en el RegisterOK
    } catch (error) {
      toast.error('Rellene todos los campos adecuadamente, por favor')
    }
  }

  return (
    <>
      <Toaster />

      <main id="formMainFormSignUp">
        <form className="signupForm" action="">
          <h2 className="signupFormh2">Crear cuenta de usuario</h2>
          <div className="divSignup">
            <label className="labelSignup">Nombre</label>
            <input
              className="inSignup"
              onChange={(e) => {
                setName(e.target.value)
              }}
              required
              placeholder="Introduce nombre de la empresa"
            />
          </div>

          <div className="divSignup">
            <label className="labelSignup">Contraseña</label>
            <input
              className="inSignup"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              required
              placeholder="Introduce tu contraseña"
            />
          </div>

          <div className="divSignup">
            <label className="labelSignup">CIF</label>
            <input
              className="inSignup"
              onChange={(e) => {
                setCIF(e.target.value)
              }}
              required
              placeholder="Introduce tu CIF"
            />
          </div>

          <div className="divSignup">
            <label className="labelSignup">Dirección</label>
            <input
              className="inSignup"
              onChange={(e) => {
                setAddress(e.target.value)
              }}
              required
              placeholder="Introduce direccion"
            />
          </div>

          <div className="divSignup">
            <label className="labelSignup">Código Postal</label>
            <input
              className="inSignup"
              onChange={(e) => {
                setCP(e.target.value)
              }}
              required
              placeholder="Introduce CP"
            />
          </div>

          <div className="divSignup">
            <label className="labelSignup">Ciudad</label>
            <input
              className="inSignup"
              onChange={(e) => {
                setCity(e.target.value)
              }}
              required
              placeholder="Introduce ciudad"
            />
          </div>

          <div className="divSignup">
            <label className="labelSignup">Provincia</label>
            <input
              className="inSignup"
              onChange={(e) => {
                setProvince(e.target.value)
              }}
              required
              placeholder="Introduce provincia"
            />
          </div>

          <button
            className="button-signup pulse-effect"
            onClick={(e) => {
              e.preventDefault()
              handleSignUp()
            }}
          >
            Registrarse
          </button>
        </form>
      </main>
    </>
  )
}

export default FormSignup
