// React
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Header from './Header';
import Footer from './Footer';
// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';

const App = () => {
  //estados
  const [name, setName] = useState('');

  return (
    <div>
      <Header />
      <main className="containerMain">
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/about" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
