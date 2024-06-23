import { useNavigate } from "react-router-dom"
import "./MenuOptionsClient.css"


const MenuOptionsClient = () => {
  const navigate = useNavigate()
  return (
    <div id="client-option">
        <ul>
            <a onClick={() => navigate("/ClientProfile")}><li>Mi Perfil</li></a>
            <a onClick={() => navigate("/UpdateDataClient")}><li>Actualizar mis datos de registro</li></a>
            <a onClick={() => navigate("/DeleteOK")}><li>Darme de baja</li></a>
        </ul>
    </div>
  )
}

export default MenuOptionsClient