import "./MenuOptionsAdmin.css"
import { useNavigate } from "react-router-dom"

const MenuOptionsAdmin = () => {
  const navigate = useNavigate()
  return (
    <div id="menu-option-admin">
        <ul>
          
          <a onClick={()=>navigate("/AddFactory")}><li>Agregar fábrica</li></a>
        </ul>
    </div>
  )
}

export default MenuOptionsAdmin