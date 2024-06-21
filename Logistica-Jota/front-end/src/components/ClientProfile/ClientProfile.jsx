import './ClientProfile.css'
import { getClientInformation } from '../../services/clientInformation'
import { useEffect, useState } from 'react'

const ClientProfile = () => {
  const [datosCliente, setDatosCliente] = useState({})

  useEffect(() => {
    handleGetClientInformation()
  }, [])

  const handleGetClientInformation = async () => {
    const result = await getClientInformation()
    setDatosCliente(result)
  }

  console.log(datosCliente)
  return (
    <>
      <p>{datosCliente.name}</p>
      <br />
      <p>{datosCliente.CIF}</p>
      <br />
      <p>{datosCliente.city}</p>
      <br />
    </>
  )
}

export default ClientProfile
