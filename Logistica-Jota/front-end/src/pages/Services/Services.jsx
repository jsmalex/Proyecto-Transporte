import "./Services.css"

const Services = () => {
  return (
    <main>
      <section className="services">
        <h2 className="header-services">Servicios</h2>
        <article>
          <h3>Transporte de Carga</h3>
          <p>
            Ofrecemos servicios de transporte de carga a nivel nacional e
            internacional, asegurando la entrega puntual y segura de sus
            mercancías.
          </p>
        </article>
        <article>
          <h3>Logística Integral</h3>
          <p>
            Nuestro servicio de logística integral cubre desde la planificación
            hasta la ejecución, optimizando cada paso del proceso para
            garantizar eficiencia y ahorro de costos.
          </p>
        </article>
        <article>
          <h3>Almacenamiento</h3>
          <p>
            Disponemos de almacenes seguros y modernos para el almacenamiento de
            sus productos, con sistemas de gestión avanzados que permiten un
            control exhaustivo de inventarios.
          </p>
        </article>
        <article>
          <h3>Distribución</h3>
          <p>
            Ofrecemos soluciones de distribución a medida, asegurando que sus
            productos lleguen a su destino final de manera rápida y eficiente.
          </p>
        </article>
        <article>
          <h3>Transporte Refrigerado</h3>
          <p>
            Nuestros vehículos equipados con tecnología de refrigeración
            garantizan el transporte seguro de productos perecederos,
            manteniendo la cadena de frío en todo momento.
          </p>
        </article>
        <article>
          <h3>Aduanas y Documentación</h3>
          <p>
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