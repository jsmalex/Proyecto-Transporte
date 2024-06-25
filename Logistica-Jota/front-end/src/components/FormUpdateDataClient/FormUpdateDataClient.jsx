import { useState } from 'react'
import './FormUpdateDataClient.css'
import toast, { Toaster } from 'react-hot-toast'
import { updateDataClient } from '../../services/updateDataClient'
import {  useNavigate } from 'react-router-dom'

const FormUpdateDataClient = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [CP, setCP] = useState('')
  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')
  const navigator = useNavigate()
  const handleUpdateDataClient = async () => {
    if (
      name.length === 0 ||
      password.length === 0 ||
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
        address: address,
        CP: CP,
        city: city,
        province: province,
      }
      await updateDataClient(data)
      navigator("/UpdateOK")
    } catch (error) {
      toast.error('Rellene todos los campos adecuadamente, por favor')
    }
  }
  const navigate = useNavigate()
  return (
    <div id="form-update">
      <Toaster />
      <main id="formMain0">
        <h2 className='actualizaCuenta'>hadsfasdfasdfasdfasdfasdflahola</h2>
        <form action="">
          <div>
            <label>Nombre</label>
            <input
              onChange={(e) => {
                setName(e.target.value)
              }}
              required
              placeholder="Actualice nombre de la empresa"
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
              placeholder="Actualice tu contraseña"
            />
          </div>

          <div>
            <label>Direccion</label>
            <input
              onChange={(e) => {
                setAddress(e.target.value)
              }}
              required
              placeholder="Actualice direccion"
            />
          </div>

          <div>
            <label>Codigo Postal</label>
            <input
              onChange={(e) => {
                setCP(e.target.value)
              }}
              required
              placeholder="Actualice CP"
            />
          </div>

          <div>
            <label>Ciudad</label>
            <input
              onChange={(e) => {
                setCity(e.target.value)
              }}
              required
              placeholder="Actualice ciudad"
            />
          </div>

          <div>
            <label>Provincia</label>
            <input
              onChange={(e) => {
                setProvince(e.target.value)
              }}
              required
              placeholder="Actualice provincia"
            />
          </div>

          <button
            onClick={(e) => {
              e.preventDefault()
              handleUpdateDataClient()
            }}
          >
            Actualizar
          </button>
        </form>
      </main>

      <a onClick={() => navigate('/HomeClient')}>...volver</a>
    </div>
  )
}

export default FormUpdateDataClient
