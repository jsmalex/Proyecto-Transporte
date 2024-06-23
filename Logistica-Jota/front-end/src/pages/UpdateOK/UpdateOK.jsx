import { useNavigate } from "react-router-dom"
import "./UpdateOK.css"


const UpdateOK = () => {
  const navigate = useNavigate();
  return (
    <div id="update-ok">
        <p>Datos actualizados correctamente</p>
        <a onClick={()=>navigate("/HomeClient")}>...volver</a>
    </div>
  )
}

export default UpdateOK