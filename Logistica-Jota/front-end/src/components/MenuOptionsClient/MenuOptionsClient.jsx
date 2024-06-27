import { useNavigate } from "react-router-dom"
import "./MenuOptionsClient.css"


const MenuOptionsClient = () => {
  const navigate = useNavigate()
  return (
    <div id="menu-option-client">
      <ul>
        <a onClick={() => navigate('/ClientProfile')}>
          <li>Mi Perfil</li>
        </a>
        <a onClick={() => navigate('/UpdateDataClient')}>
          <li>Actualizar mis datos de registro</li>
        </a>
        <a onClick={() => navigate('/MakeOrder')}>
          <li>Realizar pedidos</li>
        </a>
        <a onClick={() => navigate('/DeleteOK')}>
          <li>Darme de baja</li>
        </a>
        <a onClick={() => navigate('/GetAllOrderOfClient')}>
          <li>Ver todos mis pedidos</li>
        </a>
      </ul>
    </div>
  )
}

export default MenuOptionsClient