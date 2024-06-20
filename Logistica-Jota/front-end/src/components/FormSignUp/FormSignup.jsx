import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./FormSignUp.css"

const FormSignup = () => {
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [role, setRole] = useState('client')
  const [CIF, setCIF] = useState()
  const [address, setAddress] = useState()
  const [CP, setCP]= useState()
  const [city, setCity] = useState();
  const [province, setProvince] = useState()
  const [collection_price, setCollection_price] = useState(0)
  const [until_12T_price, setUntil_12T_price] = useState(0)
  const [collection_12T_15T_price, setCollection_12T_15T_price] = useState(0)
  const [over15T_price, setOver15T_price] = useState(0)
  const [Valencia_3T_price, setValencia_3T_price] = useState(0)
  const [validated_client, setValidated_client] = useState(false)


  
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
