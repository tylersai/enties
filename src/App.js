import React from 'react';
import './App.css';

import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <section id="search">
        <Navbar/>
        <br/>
        <h1 className="ent-text-shadow">Let's Watch Movie</h1>
      </section>
    </div>
  );
}

export default App;
