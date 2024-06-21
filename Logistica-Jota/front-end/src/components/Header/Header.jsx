import "./Header.css"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
  return (
    <div className="header">
      <a href="/">
        <img src="/src/assets/img/logo.jpg" alt="Logo de la empresa" />
      </a>

      <nav>
        <a href="/services">Servicios</a>
        <a href="/aboutUs">Sobre Nosotros</a>
        <a href="/contact">Contacto</a>
      </nav>

      <div className="botones">
        {localStorage.token ? (//Si estoy logueado (tengo el token) muestro un boton para cerrar sesion y un enlace par ir a mi pagina principal. Si no estoy logueado muestro los dos botones de registrarte e iniciar sesion.
          <>
            <a href="/HomeClient">Mi Sitio</a>
            <button onClick={() =>{ 
              localStorage.removeItem("token")//destruyo el token si cierro sesion para que ocurra el cambio de botones
              navigate('/')}}>Cerrar Sesion</button>
          </>
        ) : (
          <>
            <button onClick={() => navigate('/signUp')}>Registrate</button>
            <button onClick={() => navigate('/login')}>Accede</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Header