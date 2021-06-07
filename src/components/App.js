import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../stylesheets/App.scss';

const App = () => {
  //estados
  const [name, setName] = useState('');

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

export default App;
