import './Contact.css'

const Contact = () => {
  return (
    <div>
      <main id="main-contact">
        <section className="contact">
          <h2 className="contact-header">Contacto</h2>
          <article>
            <h3>Información de Contacto</h3>
            <p className="info-question">
              Si tienes alguna pregunta o necesitas más información sobre
              nuestros servicios, no dudes en contactarnos a través de los
              siguientes medios:
            </p>
            <ul id="ul-chahci">
              <li className="list-item-ul-chahci">
                <img className="icon" src="src/assets/img/phone.png" />
                <strong className="adri-has-been-here tel">
                  <p className='in-ul-chachi'>Teléfono:</p>
                </strong>
                <p className="info-ul">
                  <b>+34 123 456 789</b>
                </p>
              </li>
              <li className="list-item-ul-chahci">
                <img className="icon" src="src/assets/img/email-icon.jpg" />
                <strong className="adri-has-been-here email">
                  <p>Email:</p>
                </strong>
                <p className="info-ul">
                  <b>info@empresa-logistica.com</b>
                </p>
              </li>
              <li className="list-item-ul-chahci">
                <img
                  className="icon"
                  src="src/assets/icons/ubicacionfactory.jpg"
                />
                <strong className="adri-has-been-here">
                  <p className="address">Dirección:</p>
                </strong>
                <p className="info-ul">
                  <b>Calle Principal 123, Ciudad, País</b>
                </p>
              </li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  )
}

export default Contact
