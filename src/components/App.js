// React
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// Data
import data from '../data/data.json';
// Components
import Header from './Header';
import ProjectList from './ProjectList';
import AboutEn from './AboutEn';
import AboutEs from './AboutEs';
import Footer from './Footer';
// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';

const App = () => {
  //estados
  const [projects] = useState(data);

  return (
    <div className="containerBody">
      <Header />
      <main className="containerMain">
        <Switch>
          <Route path="/" exact>
            <ProjectList projects={projects} />
          </Route>
          <Route path="/aboutEn">
            <AboutEn />
          </Route>
          <Route path="/aboutEs">
            <AboutEs />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
