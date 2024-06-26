import './AboutUs.css'

const AboutUs = () => {
  return (
    <main id="about-us">
      <section className="about-us">
        <h2 className="about-us-header">Sobre Nosotros</h2>
        <div className="information">
          <article className="story">
            <h3>Nuestra Historia</h3>
            <p>
              Fundada en el año 2000, nuestra empresa ha crecido hasta
              convertirse en un referente en el sector de la logística y el
              transporte. Con más de 20 años de experiencia, nos hemos dedicado
              a proporcionar soluciones innovadoras y eficientes para nuestros
              clientes.
            </p>
          </article>
          <img
            className="about-us-img"
            src="src/assets/img/alta-direccion.jpg"
          />
        </div>
        <div className="information">
          <article className="mission">
            <img
              className="our-mission-img"
              src="src/assets/img/mission.jpeg"
            />
            <div className="our-mission-text">
              <h3>Nuestra Misión</h3>
              <p>
                Proveer servicios de logística y transporte de la más alta
                calidad, asegurando la satisfacción total de nuestros clientes
                mediante la innovación, la eficiencia y el compromiso con la
                excelencia.
              </p>
            </div>
          </article>
        </div>
        <div className="information">
          <article className="vision">
            <h3>Nuestra Visión</h3>
            <p>
              Ser líderes en el sector de la logística y el transporte a nivel
              global, reconocidos por nuestra capacidad de adaptarnos a las
              necesidades del mercado y por nuestra dedicación a la mejora
              continua.
            </p>
          </article>
          <img className="our-vission-img" src="src/assets/img/vission.jpeg" />
        </div>
        <div className="information">
          <img className="our-values-img" src="src/assets/img/valores.jpeg" />
          <article className="values">
            <h3>Nuestros Valores</h3>
            <ul>
              <li>
                <strong>Compromiso:</strong> Estamos comprometidos con la
                satisfacción de nuestros clientes y el éxito de sus negocios.
              </li>
              <li>
                <strong>Integridad:</strong> Actuamos con honestidad y
                transparencia en todas nuestras operaciones.
              </li>
              <li>
                <strong>Innovación:</strong> Buscamos constantemente nuevas
                formas de mejorar nuestros servicios y procesos.
              </li>
              <li>
                <strong>Calidad:</strong> Nos esforzamos por ofrecer servicios
                de la más alta calidad en todo momento.
              </li>
            </ul>
          </article>
        </div>
        <div className="information">
          <article className="team">
            <h3>Nuestro Equipo</h3>
            <p>
              Contamos con un equipo de profesionales altamente capacitados y
              dedicados, que trabajan día a día para ofrecer soluciones
              personalizadas y eficientes a nuestros clientes.
            </p>
          </article>
          <img className="team-img" src="src/assets/img/team.jpeg" />
        </div>
        <div className="information">
          <img
            className="work-site-img"
            src="src/assets/img/instalaciones.jpeg"
          />
          <article className="work-site">
            <h3>Nuestras Instalaciones</h3>
            <p>
              Nuestras instalaciones están equipadas con tecnología de punta, lo
              que nos permite manejar y almacenar mercancías de manera segura y
              eficiente. Disponemos de una amplia flota de vehículos modernos y
              ecoamigables.
            </p>
          </article>
        </div>
        <div className="information">
          <article className="social-responsability">
            <h3>Responsabilidad Social</h3>
            <p>
              Nos comprometemos a realizar nuestras operaciones de manera
              responsable y sostenible, contribuyendo al bienestar de la
              comunidad y al cuidado del medio ambiente.
            </p>
          </article>
          <img
            className="social-responsability-img"
            src="src/assets/img/social-responsability.jpeg"
          />
        </div>
        <img className="why-us-about-us" src="/src/assets/img/Why Us(1).png" />
      </section>
    </main>
  )
}

export default AboutUs
