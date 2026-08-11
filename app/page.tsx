import Image from "next/image";

const whatsappUrl =
  "https://wa.me/34663781952?text=Hola%20Juli%C3%A1n%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20cursos%20de%20cuero%20de%20S%C3%A1%C3%B1udo.";
const emailUrl = "mailto:taller@sanudo.cat?subject=Consulta%20desde%20la%20web";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Sañudo+Artesania+en+Cuir+Poble+Espanyol+Barcelona";
const shopUrl = "https://www.sanudo.cat/es/botiga/";

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 5.5h14v10H9l-4 3v-13Z" />
      <path d="M8.5 9.5h7M8.5 12.5H13" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.7 6-12A6 6 0 0 0 6 9c0 6.3 6 12 6 12Z" />
      <circle cx="12" cy="9" r="2.2" />
    </svg>
  );
}

function StitchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 8h3m3 0h3m3 0h3m3 0h1M3 16h1m3 0h3m3 0h3m3 0h2" />
    </svg>
  );
}

const process = [
  ["01", "Dibujar", "Partimos de una idea que puedas terminar con tus manos."],
  ["02", "Cortar", "Aprendes a reconocer el cuero, medirlo y cortarlo con precisión."],
  ["03", "Montar", "Costuras, cantos, remaches y herrajes, sin atajos."],
  ["04", "Estrenar", "Sales con una pieza útil y con la técnica para seguir."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Sañudo, volver al inicio">
          SAÑUDO<span>®</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#cursos">Cursos</a>
          <a href="#oficio">El oficio</a>
          <a href="#visita">Visita</a>
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Consultar plaza <ChatIcon />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="kicker">POBLE ESPANYOL · BARCELONA · ARTESANOS DESDE 1971</p>
          <h1>
            El cuero
            <span>se aprende</span>
            haciendo.
          </h1>
          <p className="hero-intro">
            Un taller profesional, seis plazas y más de cincuenta años de oficio a tu
            disposición.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
              Quiero hacer mi primera pieza <ChatIcon />
            </a>
            <a className="text-link" href="#cursos">
              Ver cursos y experiencias <StitchIcon />
            </a>
          </div>
        </div>
        <figure className="hero-image">
          <Image
            src="/images/class.webp"
            alt="Alumnos trabajando el cuero en el aula Sañudo"
            fill
            priority
            sizes="(max-width: 820px) 100vw, 46vw"
          />
          <figcaption>
            <span>AULA SAÑUDO</span>
            <strong>Aprender con las manos</strong>
          </figcaption>
        </figure>
      </section>

      <aside className="facts" aria-label="Datos del curso">
        <p><span>04</span> clases al mes</p>
        <p><span>02 h</span> por sesión</p>
        <p><span>Todo</span> incluido</p>
        <p><span>326,70 €</span> IVA incluido</p>
      </aside>

      <section className="workbench" id="oficio">
        <div className="workbench-title">
          <p className="section-label">EL TALLER</p>
          <h2>No es una clase de manualidades.</h2>
          <p>
            Es una mesa de trabajo real. Herramientas de oficio, cuero de curtido vegetal y
            acompañamiento directo para construir algo que dure.
          </p>
        </div>
        <div className="workbench-collage">
          <figure className="collage-main">
            <Image src="/images/tools.webp" alt="Herramientas del taller Sañudo" fill sizes="(max-width: 760px) 100vw, 50vw" />
          </figure>
          <figure className="collage-small">
            <Image src="/images/cutting.webp" alt="Corte de una pieza durante un curso" fill sizes="(max-width: 760px) 50vw, 22vw" />
          </figure>
          <div className="collage-note">
            <span>6</span>
            <p>personas máximo por grupo</p>
            <small>Más mesa. Más tiempo. Más oficio.</small>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="process-head">
          <p className="section-label">DE LA IDEA A LA PIEZA</p>
          <h2>La teoría ocupa poco. El resto se hace.</h2>
        </div>
        <div className="process-grid">
          {process.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="courses" id="cursos">
        <div className="courses-heading">
          <p className="section-label">ELIGE CÓMO EMPEZAR</p>
          <h2>Una tarde.<br />Un mes.<br />Tu proyecto.</h2>
        </div>
        <div className="course-list">
          <article>
            <span className="course-number">01</span>
            <div>
              <p className="course-type">FORMACIÓN MENSUAL</p>
              <h3>Introducción a la marroquinería</h3>
              <p>Cuatro sesiones semanales de dos horas. Herramientas, materiales, cuero y acceso al Poble Espanyol incluidos.</p>
            </div>
            <div className="course-side"><strong>326,70 €</strong><small>IVA incluido</small></div>
          </article>
          <article>
            <span className="course-number">02</span>
            <div>
              <p className="course-type">EXPERIENCIA DE TALLER</p>
              <h3>Hazte tu propio cinturón</h3>
              <p>Elige el cuero, corta, monta la hebilla y personalízalo con tus iniciales. Consulta la próxima fecha.</p>
            </div>
            <div className="course-side"><strong>A medida</strong><small>grupo reducido</small></div>
          </article>
          <article>
            <span className="course-number">03</span>
            <div>
              <p className="course-type">FORMACIÓN PERSONALIZADA</p>
              <h3>Trae un proyecto propio</h3>
              <p>Una bolsa, una cartera o una idea todavía a medias. El equipo adapta la formación a lo que quieras construir.</p>
            </div>
            <div className="course-side"><strong>Hablemos</strong><small>plan personal</small></div>
          </article>
          <a className="button button-leather course-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            Preguntar por la próxima plaza <ChatIcon />
          </a>
        </div>
      </section>

      <section className="made-here">
        <figure>
          <Image src="/images/product.webp" alt="Piezas de cuero realizadas en el taller" fill sizes="(max-width: 820px) 100vw, 44vw" />
        </figure>
        <div className="made-copy">
          <p className="section-label">HECHO AQUÍ</p>
          <h2>Piezas que envejecen bien.</h2>
          <p>
            Cinturones, bolsos y encargos especiales hechos uno a uno en el mismo taller donde
            se imparten los cursos.
          </p>
          <blockquote>
            “Comprar una pieza Sañudo es contribuir a una manera más humana de hacer las cosas.”
            <cite>— Julián Sañudo</cite>
          </blockquote>
          <a className="text-link light" href={shopUrl} target="_blank" rel="noreferrer">
            Ver piezas disponibles <StitchIcon />
          </a>
        </div>
      </section>

      <section className="heritage">
        <p className="section-label">DESDE 1971</p>
        <h2>Más de cincuenta años.<br />El mismo oficio.</h2>
        <div>
          <p>
            Julián Sañudo mantiene vivo un trabajo que no se aprende mirando una pantalla. En
            el taller del Poble Espanyol, máquinas antiguas, herramientas y cuero conviven con
            una nueva generación que quiere aprender a hacer.
          </p>
          <a className="button button-outline" href={emailUrl}>Proponer un encargo <StitchIcon /></a>
        </div>
      </section>

      <section className="visit" id="visita">
        <div>
          <p className="section-label">VEN AL TALLER</p>
          <h2>La visita empieza antes de tocar el cuero.</h2>
          <p>Av. Francesc Ferrer i Guàrdia, 13<br />Poble Espanyol · Barcelona</p>
        </div>
        <div className="visit-card">
          <span>BCN<br />08038</span>
          <p>Visitas, tienda y cursos dentro del recinto.</p>
          <a className="button button-yellow" href={mapsUrl} target="_blank" rel="noreferrer">
            Abrir ubicación <PinIcon />
          </a>
        </div>
      </section>

      <footer>
        <a className="footer-brand" href="#inicio">SAÑUDO<span>®</span></a>
        <p>Artesanía en cuero · Barcelona</p>
        <div>
          <a href="tel:+34663781952">663 78 19 52</a>
          <a href={emailUrl}>taller@sanudo.cat</a>
          <a href={shopUrl} target="_blank" rel="noreferrer">Tienda</a>
        </div>
      </footer>

      <a className="mobile-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
        Consultar curso <ChatIcon />
      </a>
    </main>
  );
}
