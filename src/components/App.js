// React
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// Data
import data from '../data/data.json';
// Components
import Header from './Header';
import HouseList from './HouseList';
import Footer from './Footer';
// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';

const App = () => {
  //estados
  const [houses] = useState(data);
  const [name, setName] = useState('');

  return (
    <div>
      <Header />
      <main className="containerMain">
        <Switch>
          <Route path="/" exact>
            <HouseList houses={houses} />
          </Route>
          <Route path="/about" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
