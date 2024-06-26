import './Contact.css'

const Contact = () => {
  return (
    <div>
      <main>
        <section className="contact">
          <h2 className="contact-header">Contacto</h2>
          <article>
            <h3>Información de Contacto</h3>
            <p className="info-question">
              Si tienes alguna pregunta o necesitas más información sobre
              nuestros servicios, no dudes en contactarnos a través de los
              siguientes medios:
            </p>
            <ul>
              <li>
                <strong>Teléfono:</strong> +34 123 456 789
              </li>
              <li>
                <strong>Email:</strong> info@empresa-logistica.com
              </li>
              <li>
                <strong>Dirección:</strong> Calle Principal 123, Ciudad, País
              </li>
            </ul>
          </article>
          <article>
            <h3>Nuestras Redes Sociales</h3>
            <p className="rrss-caption">
              Síguenos en nuestras redes sociales para estar al tanto de
              nuestras novedades:
            </p>
            <div className="rrss">
              <li className="rs">
                <a
                  href="https://www.facebook.com/empresa-logistica"
                  target="_blank"
                >
                  <img className="rrss-img" src="src/assets/img/facebook.png" />
                </a>
              </li>
              <li className="rs">
                <a
                  href="https://www.twitter.com/empresa-logistica"
                  target="_blank"
                >
                  <img className="rrss-img" src="src/assets/img/linkedin.png" />
                </a>
              </li>
              <li className="rs">
                <a
                  href="https://www.linkedin.com/company/empresa-logistica"
                  target="_blank"
                >
                  <img className="rrss-img" src="src/assets/img/X.png" />
                </a>
              </li>
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default Contact
