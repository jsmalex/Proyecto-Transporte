import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./FormSignUp.css"
import toast, { Toaster } from 'react-hot-toast'
import { signUp } from '../../services/auth'

const FormSignup = () => {
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [CIF, setCIF] = useState()
  const [address, setAddress] = useState()
  const [CP, setCP]= useState()
  const [city, setCity] = useState();
  const [province, setProvince] = useState()

  const navigate = useNavigate()


  const handleSignUp = async () => {
    try {
       let data = {
      name: name,
      password: password,
      CIF: CIF,
      address: address,
      CP: CP,
      city: city,
      province: province
    }
    const result = await signUp(data)
    localStorage.setItem('CIF', result.CIF)
    localStorage.setItem('token', result.token)
    localStorage.setItem('role', result.role)
    navigate('/RegisterOK', {state: {registered: true}}) //Con esta linea redirecciono a Home y mando el valor TRUE en una variable registered que podre usar en el Home
    } catch (error) {
      toast.error("Rellene todos los campos adecuadamente, por favor")
    }
   
  }

  return (
    <>
      <Toaster />
      <fieldset>
        <legend>Crea tu Cuenta de usuario</legend>
        <form action="">
          <div>
            <label>Nombre</label>
            <input
              onChange={(e) => {
                setName(e.target.value)
              }}
              required
              placeholder="Introduce nombre de la empresa"
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
            <label>Direccion</label>
            <input
              onChange={(e) => {
                setAddress(e.target.value)
              }}
              required
              placeholder="Introduce direccion"
            />
          </div>

          <div>
            <label>Codigo Postal</label>
            <input
              onChange={(e) => {
                setCP(e.target.value)
              }}
              required
              placeholder="Introduce CP"
            />
          </div>

          <div>
            <label>Ciudad</label>
            <input
              onChange={(e) => {
                setCity(e.target.value)
              }}
              required
              placeholder="Introduce ciudad"
            />
          </div>

          <div>
            <label>Provincia</label>
            <input
              onChange={(e) => {
                setProvince(e.target.value)
              }}
              required
              placeholder="Introduce provincia"
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
      </fieldset>
    </>
  )
}

export default FormSignup
