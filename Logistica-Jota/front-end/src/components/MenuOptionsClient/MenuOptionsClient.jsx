import "./MenuOptionsClient.css"


const MenuOptionsClient = () => {
  return (
    <div>
        <ul>
            <a href="/ClientProfile"><li>Mi Perfil</li></a>
            <a href="/UpdateDataClient"><li>Actualizar mis datos de registro</li></a>
            <a href="/DeleteOK"><li>Darme de baja</li></a>
        </ul>
    </div>
  )
}

export default MenuOptionsClient