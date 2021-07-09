import React from 'react';
import '../stylesheets/About.scss';

const About = (props) => {
  return (
    <article className="about">
      <section className="section1">
        <div className="section1__left">
          <h2 className="section1__left--title">Front-end Developer & Architect</h2>
          <h3 className="section1__left--subtitle">very creative, professional, easy going and organized.</h3>
        </div>
        <div className="section1__right">
          <img src="../images/lauraportillo" alt="laura" />
        </div>
      </section>
    </article>
  );
};

export default About;
