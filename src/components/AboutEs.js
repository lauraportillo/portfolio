import { Link } from 'react-router-dom';
import image from '../images/lauraportillo.jpg';
import '../stylesheets/About.scss';

const AboutEs = (props) => {
  return (
    <article className="about">
      <section className="section1">
        <div className="section1__left">
          <h2 className="section1__left--title">Programadora Front-end & Arquitecto</h2>
          <h3 className="section1__left--subtitle">
            creativa, muy organizada, profesional y buena trabajando en equipo.
          </h3>
        </div>
        <div className="section1__right">
          <img className="section1__right--photo" src={image} alt="laura" />
        </div>
      </section>
      <section className="section2">
        <div className="section2__text">
          <p className="section2__text--para">
            Apasionada por el orden y la organización estudié Arquitectura, para poder construir ideas, estructurar
            espacios, para encajar piezas, moverlas y ajustarlas.
          </p>

          <p className="section2__text--para">
            Admirada por la tecnología me embarco en este viaje como desarrolladora front end, donde de nuevo tengo que
            construir, estructurar, encajar y mover código, comunicándome con las máquinas.
          </p>

          <p className="section2__text--para">
            Mi experiencia trabajando con equipos multidisciplinares e internacionales me han aportado una mentalidad
            abierta para relacionarme con otras culturas y métodos de trabajo. Soy una persona creativa, trabajadora, me
            gusta tener todo bajo control, pero si no lo consigo, busco soluciones y pido ayuda si es necesario.
          </p>

          <p className="section2__text--para">
            Mi mayor reto profesional ha sido dar este paso a la reinvención, y formar parte del bootcamp de Adalab, que
            me ha dado las herramientas para continuar el camino. Una vez aquí, vengo dispuesta a trasladar todas mis
            habilidades al mundo de la tecnología.
          </p>

          <p className="section2__text--para">
            Próximos objetivos: convertirme en Arquitecto al cuadrado, esta vez en el campo de la tecnología!
          </p>
        </div>

        <ul className="section2__lang">
          <li className="section2__lang--en">
            <Link to="/aboutEn">En</Link>
          </li>
          <li className="section2__lang--item">|</li>
          <li className="section2__lang--es">
            <Link to="/aboutEs">Es</Link>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default AboutEs;
