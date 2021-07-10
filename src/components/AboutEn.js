import React from 'react';
import image from '../images/lauraportillo.jpg';
import '../stylesheets/About.scss';

const AboutEn = (props) => {
  return (
    <article className="about">
      <section className="section1">
        <div className="section1__left">
          <h2 className="section1__left--title">Front-end Developer & Architect</h2>
          <h3 className="section1__left--subtitle">very creative, professional, easy going and organized.</h3>
        </div>
        <div className="section1__right">
          <img className="section1__right--photo" src={image} alt="laura" />
        </div>
      </section>
      <section className="section2">
        <div className="section2__text">
          <p className="section2__text--para">
            Passionate about order and organization, I studied Architecture, to be able to build ideas, structure
            spaces, to fit pieces, move them and adjust them.
          </p>

          <p className="section2__text--para">
            Admired by technology I embark on this journey as front end developer, where again I have to build,
            structure, fit and move code, communicating with machines.
          </p>

          <p className="section2__text--para">
            My experience working with multidisciplinary and international teams brought me an open mind to interact
            with other cultures and work methods. I am a creative person, hard-working and I like to have everything
            under control, but if I don't get it, I look for solutions and ask for help if required.
          </p>

          <p className="section2__text--para">
            My biggest professional challenge has been to take this step towards reinvention, and to be part of the
            bootcamp from Adalab, which has given me the tools to continue on the path. Once here, I come ready to
            transfer all my skills to the world of technology.
          </p>

          <p className="section2__text--para">
            Upcoming goals: become an Architect squared, this time in the field of technology!
          </p>
        </div>

        <ul className="section2__lang">
          <li className="section2__lang--en">En</li>
          <li className="section2__lang--item">|</li>
          <li className="section2__lang--es">Es</li>
        </ul>

        {/* <p className="section2__text--para">
          Apasionada por el orden y la organización estudié Arquitectura, para poder construir ideas, estructurar
          espacios, para encajar piezas, moverlas y ajustarlas. Admirada por la tecnología me embarco en este viaje como
          desarrolladora front end, donde de nuevo tengo que construir, estructurar, encajar y mover código,
          comunicándome con las máquinas. Mi experiencia trabajando con equipos multidisciplinares e internacionales me
          han aportado una mentalidad abierta para relacionarme con otras culturas y métodos de trabajo. Soy una persona
          creativa, trabajadora, me gusta tener todo bajo control, pero si no lo consigo, busco soluciones y pido ayuda
          si es necesario. Mi mayor reto profesional ha sido dar este paso a la reinvención, y formar parte del bootcamp
          de Adalab, que me ha dado las herramientas para continuar el camino. Una vez aquí, vengo dispuesta a trasladar
          todas mis habilidades al mundo de la tecnología. Próximos objetivos: convertirme en Arquitecto al cuadrado,
          esta vez en el campo de la tecnología!
        </p> */}
      </section>
    </article>
  );
};

export default AboutEn;
