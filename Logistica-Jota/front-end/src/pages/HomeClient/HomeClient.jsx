import MenuOptionsClient from '../../components/MenuOptionsClient/MenuOptionsClient'
import './HomeClient.css'

const HomeClient = () => {
  return (
    <div>
       <div className="background">
        <img
          className="truck"
          src="/src/assets/img/background.jpg"
          alt="Imagen de fondo">
          </img>
        <img className="orange"
        src="../../assets/img/Rectangle 2065.png"
        alt="Cover">  
        </img>
        </div>
      <MenuOptionsClient />
      
    </div>
  )
}

export default HomeClient
