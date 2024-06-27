import { getClientInformation } from '../../services/clientInformation'
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div id="header">
      <a className="ancle-header-img" onClick={() => navigate('/')}>
        <img src="/src/assets/img/logo.png" alt="Logo de la empresa" />
      </a>

      <nav>
        <a className="tab" onClick={() => navigate('/services')}>
          Servicios
        </a>
        <a className="tab" onClick={() => navigate('/aboutUs')}>
          Sobre Nosotros
        </a>
        <a className="tab" onClick={() => navigate('/contact')}>
          Contacto
        </a>
      </nav>

      <div className="botones">
        {localStorage.token ? ( //Si estoy logueado (tengo el token) muestro un boton para cerrar sesion y un enlace par ir a mi pagina principal. Si no estoy logueado muestro los dos botones de registrarte e iniciar sesion.
          <>
            <a
              id="mySite"
              onClick={async () => {
                const { role } = await getClientInformation()
                if (role === 'client') navigate('/HomeClient')
                else navigate('/HomeAdmin')
              }}
            >
              Mi Sitio
            </a>
            <button
              className="button pulse-effect"
              onClick={() => {
                localStorage.removeItem('token') //destruyo el token si cierro sesion para que ocurra el cambio de botones
                navigate('/')
              }}
            >
              Cerrar Sesion
            </button>
          </>
        ) : (
          <>
            <button
              className="button pulse-effect"
              onClick={() => navigate('/signUp')}
            >
              Regístrate
            </button>
            <button
              className="button pulse-effect"
              onClick={() => navigate('/login')}
            >
              Accede
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
