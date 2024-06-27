import "./ConfirmDelete.css"
import { useNavigate } from 'react-router-dom'
import { deleteClient } from "../../services/deleteClient";

const ConfirmDelete = () => {
  const navigate = useNavigate();

  return (
    <div className="background-confirm-delete">
      <p className="alert-delete">¿Seguro que desea darse de baja en nuestra web?</p>
      <div className="question-buttons">
        <button onClick={async ()=>{
          await deleteClient()
          localStorage.removeItem("token")//destruyo el token si cierro sesion para que ocurra el cambio de botones
          navigate('/')
        }}>Aceptar</button>
        <button onClick={()=>navigate("/HomeClient")}>Cancelar</button>
      </div>
    </div>
  )
}

export default ConfirmDelete