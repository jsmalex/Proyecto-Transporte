import './ClientProfile.css'
import { getClientInformation } from '../../services/clientInformation'
import { useEffect, useState } from 'react'

const ClientProfile = () => {
  const [dataClient, setDataClient] = useState({})

  useEffect(() => {
    handleGetClientInformation()
  }, [])

  const handleGetClientInformation = async () => {
    const result = await getClientInformation()
    setDataClient(result)
  }

  return (
    <>
      <h1>Mi perfil</h1>
      <p><span>Nombre: </span>{dataClient.name}</p>
      <p><span>CIF: </span>{dataClient.CIF}</p>
      <p><span>Dirección: </span>{dataClient.address}</p>
      <p><span>Código postal: </span>{dataClient.CP}</p>
      <p><span>Ciudad: </span>{dataClient.city}</p>
      <p><span>Provincia: </span>{dataClient.province}</p>
      <p><span>Tarifa de recogida basica: </span>{dataClient.collection_price}</p>
      <p><span>Tarifa de recogida hasta 12 toneladas: </span>{dataClient.until_12T_price}</p>
      <p><span>Tarifa de recogida entre 12 y 15 toneladas: </span>{dataClient.collection_12T_15T_price}</p>
      <p><span>Tarifa de recogida más de 15 toneladas: </span>{dataClient.over15T_price}</p>
      <p><span>Tarifa de recogida 3 toneladas a Valencia: </span>{dataClient.Valencia_3T_price}</p>
      
      {dataClient.validated_client ? 
      (
        <>
          <h2 className='validada'>Cuenta VALIDADA</h2>
        </>
      )
      :
      (
        <>
          <h2 className='no-validada'>Cuenta NO VALIDADA</h2>
        </>
      )}
    </>
  )
}

export default ClientProfile
