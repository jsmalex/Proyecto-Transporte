import "./Header.css"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
  return (
    <div className="header">
        <img src="/src/assets/logo.jpg" alt="Logo de la empresa" />

        <nav>
            <a href="">Servicios</a>
            <a href="">Sobre Nosotros</a>
            <a href="">Contacto</a>
        </nav>
      
        <div className="botones">

            <button
                onClick={() =>
                navigate('/signUp')
                }
            >
                Registrate
            </button>
            <button onClick={() => navigate('/login')}>Accede</button>
        </div>
    </div>
  )
}

export default Header