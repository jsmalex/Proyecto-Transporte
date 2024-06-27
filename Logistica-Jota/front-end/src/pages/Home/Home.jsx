import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <h1 className="homeh1">Bienvenido a Logística Jota</h1>

      <img className="trucks" src="/src/assets/img/trucks.png"></img>
      <div className="intro">
        <h2 className="homeh2">¡Bienvenido a Logística Jota!</h2>
        <p>
          Somos una empresa de transporte que ofrece todo tipo de servicios y
          soluciones logísticas para su negocio. Poseemos amplia experiencia en
          el sector y miles de clientes nos avalan a lo largo del territorio
          nacional.
        </p>
        <p>
          Tenemos presencia en todas las comunidades autónomas, aunque nuestras
          instalaciones principales se encuentran en Gran Canaria, donde
          iniciamos nuestra aventura.
        </p>
        <p>
          También contamos con presencia internacional ya que realizamos la
          importación de vehículos, aunque nuestra área de trabajo principal es
          España.
        </p>
      </div>
      <img className="overfoot" src="src/assets/img/threetruck.jpg"></img>
    </div>
  )
}

export default Home
