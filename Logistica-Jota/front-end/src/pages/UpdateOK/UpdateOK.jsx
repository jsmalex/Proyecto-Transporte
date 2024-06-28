import { useNavigate } from "react-router-dom"
import "./UpdateOK.css"


const UpdateOK = () => {
  const navigate = useNavigate();
  return (
    <div id="update-ok" style={{display:"flex", justifyContent:"center",height:"40vh", flexDirection:"column", alignItems:"center"}}>
        <p style={{width:"400px"}}>Datos actualizados correctamente</p>
        <div style={{display:"flex", justifyContent:"center", width:"20vw"}}><a onClick={()=>navigate("/HomeClient")}>...volver</a></div>
        
    </div>
  )
}

export default UpdateOK