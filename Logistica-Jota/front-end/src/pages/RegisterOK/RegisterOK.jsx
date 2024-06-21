import "./RegisterOK.css"
import { useLocation } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'


const RegisterOK = () => {
    const location = useLocation()
    useEffect(() => {
      if (location?.state?.registered) {
        toast.success('Registro exitoso, está usted a la espera de validación')
      }
    })
  return (
    <>
      <Toaster />
      <h1>Usuario registrado correctamente</h1>
      <p>
        Su solicitud se ha tramitado correctamente. Procederemos a la VALIDACIÓN
        de su cuenta y nos pondremos en contacto con usted a la mayor brevedad
        posible.
      </p>
      <a href="/HomeClient">Ir a mi página de inicio</a>
    </>
  )
}

export default RegisterOK