import { useNavigate } from 'react-router-dom'
import './MenuOptionsClient.css'

const MenuOptionsClient = () => {
  const navigate = useNavigate()
  return (
    <div id="menu-option-client">
      <main id="menu">
        <ul style={{ listStyle: "none" }}>
          <li style={{ margin: '20px',  }}>
            <a
              
              className="tabmenu"
              onClick={() => navigate('/ClientProfile')}
            >
              Mi Perfil
            </a>
          </li>

          <li style={{ margin: '20px' }}>
            <a
              className="tabmenu"
              onClick={() => navigate('/UpdateDataClient')}
            >
              Actualizar mis datos de registro{' '}
            </a>
          </li>

          <li style={{ margin: '20px' }}>
            {' '}
            <a className="tabmenu" onClick={() => navigate('/MakeOrder')}>
              Realizar pedidos
            </a>
          </li>

          <li style={{ margin: '20px' }}>
            {' '}
            <a className="tabmenu" onClick={() => navigate('/DeleteOK')}>
              Darme de baja
            </a>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default MenuOptionsClient
