import { useNavigate } from 'react-router-dom'
import './MenuOptionsClient.css'

const MenuOptionsClient = () => {
  const navigate = useNavigate()
  return (
    <div id="menu-option-client">
      <main id="menu-client">
        <ul className='list-client' style={{ listStyle: 'none' }}>
          <li>
            <a
              className="tabmenu-client"
              onClick={() => navigate('/ClientProfile')}
            >
              Mi Perfil
            </a>
          </li>

          <li>
            <a
              className="tabmenu-client"
              onClick={() => navigate('/UpdateDataClient')}
            >
              Actualizar mis datos de registro{' '}
            </a>
          </li>

          <li>
            <a
              className="tabmenu-client"
              onClick={() => navigate('/MakeOrder')}
            >
              Realizar pedidos
            </a>
          </li>

          <li>
            <a className="tabmenu-client" onClick={() => navigate('/DeleteOK')}>
              Darme de baja
            </a>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default MenuOptionsClient
