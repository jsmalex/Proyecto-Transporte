import "./Services.css"

const Services = () => {
  return (
    <main id="main-services">
      <section className="services">
        <h2 className="header-services">Servicios</h2>
        <h3>Transporte de Carga</h3>
        <article className="services-article">
          <img
            className="img-service"
            src="src/assets/img/transporte-servicio.jpg"
          />
          <p className="p-service">
            Ofrecemos servicios de transporte de carga a nivel nacional e
            internacional, asegurando la entrega puntual y segura de sus
            mercancías.
          </p>
        </article>
        <h3>Logística Integral</h3>
        <article className="services-article">
          <img
            className="img-service"
            src="src/assets/img/logistica-servicio.jpeg"
          />
          <p className="p-service logistics">
            Nuestro servicio de logística integral cubre desde la planificación
            hasta la ejecución, optimizando cada paso del proceso para
            garantizar eficiencia y ahorro de costos.
          </p>
        </article>
        <h3>Almacenamiento</h3>
        <article className="services-article">
          <img
            className="img-service"
            src="src/assets/img/almacenamiento-servicio.jpeg"
          />
          <p className="p-service">
            Disponemos de almacenes seguros y modernos para el almacenamiento de
            sus productos, con sistemas de gestión avanzados que permiten un
            control exhaustivo de inventarios.
          </p>
        </article>
        <h3>Distribución</h3>
        <article className="services-article">
          <img
            className="img-service"
            src="src/assets/img/distribucion-servicio.jpg"
          />
          <p className="p-service">
            Ofrecemos soluciones de distribución a medida, asegurando que sus
            productos lleguen a su destino final de manera rápida y eficiente.
          </p>
        </article>
        <h3>Transporte Refrigerado</h3>
        <article className="services-article">
          <img
            className="img-service"
            src="src/assets/img/servicio-transporte-refrigerado.png"
          />
          <p className="p-service ref-trans">
            Nuestros vehículos equipados con tecnología de refrigeración
            garantizan el transporte seguro de productos perecederos,
            manteniendo la cadena de frío en todo momento.
          </p>
        </article>
        <h3>Aduanas y Documentación</h3>
        <article className="services-article">
          <img
            className="img-service"
            src="src/assets/img/aduanas-documentacion-servicio.jpg"
          />
          <p className="p-service customs">
            Brindamos asistencia completa en la gestión de aduanas y
            documentación, facilitando el proceso de importación y exportación
            para nuestros clientes.
          </p>
        </article>
        <img className="why-us" src="/src/assets/img/Why Us(1).png" />
      </section>
    </main>
  )
}

export default Services