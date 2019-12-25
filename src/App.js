import React from 'react';
import './App.css';

import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <section id="search">
        <Navbar/>
        <br/>
        <h2>Search Movie</h2>
      </section>
    </div>
  );
}

export default App;
