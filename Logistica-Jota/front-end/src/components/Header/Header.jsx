import "./Header.css"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
  return (
    <div id="header">
      <a onClick={()=>navigate("/")}>
        <img src="/src/assets/img/logo.jpg" alt="Logo de la empresa" />
      </a>

      <nav>
        <a onClick={()=>navigate("/services")}>Servicios</a>
        <a onClick={()=>navigate("/aboutUs")}>Sobre Nosotros</a>
        <a onClick={()=>navigate("/contact")}>Contacto</a>
      </nav>

      <div className="botones">
        {localStorage.token ? (//Si estoy logueado (tengo el token) muestro un boton para cerrar sesion y un enlace par ir a mi pagina principal. Si no estoy logueado muestro los dos botones de registrarte e iniciar sesion.
          <>
            <a onClick={()=>navigate("/HomeClient")}>Mi Sitio</a>
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