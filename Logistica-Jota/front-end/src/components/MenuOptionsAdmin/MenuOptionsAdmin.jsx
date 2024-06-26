import "./MenuOptionsAdmin.css"
import { useNavigate } from "react-router-dom"

const MenuOptionsAdmin = () => {
  const navigate = useNavigate()
  return (
    <div id="menu-option-admin">
      <ul className="list-admin" style={{ listStyle: 'none' }}>
        <li>
          <a className="tabmenu-admin" onClick={() => navigate('/AddFactory')}>
            Agregar fábrica
          </a>
        </li>
        <li>
          <a
            className="tabmenu-admin"
            onClick={() => navigate('/AddFactory') /*ESTO VA A OTRO SITIO */}
          >
            Consultar pedidos
          </a>
        </li>
        <li>
          <a
            className="tabmenu-admin"
            onClick={() => navigate('/AddFactory') /*ESTO VA A OTRO SITIO */}
          >
            Consultar clientes
          </a>
        </li>
        <li>
          <a
            className="tabmenu-admin"
            onClick={() => navigate('/AddFactory') /*ESTO VA A OTRO SITIO */}
          >
            Validar clientes
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MenuOptionsAdmin