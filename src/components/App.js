import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../stylesheets/App.scss';

const App = () => {
  //estados
  const [name, setName] = useState('');

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
