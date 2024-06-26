import "./RegisterOK.css"
import { useLocation, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'


const RegisterOK = () => {
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
      if (location?.state?.registered) {
        toast.success('Registro exitoso, está usted a la espera de validación')
      }
    })
  return (
    <div id="register-ok">
      <Toaster />
      <h1>Usuario registrado correctamente</h1>
      <p className="p-registerok">
        Su solicitud se ha tramitado correctamente. Procederemos a la VALIDACIÓN
        de su cuenta y nos pondremos en contacto con usted a la mayor brevedad
        posible.
      </p>
      <a className="tab ancle" onClick={() => navigate("/HomeClient")}>Ir a mi página de inicio</a>
    </div>
  )
}

export default RegisterOK