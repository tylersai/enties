import React from 'react';
import './App.css';

import { API_END_POINT, API_KEY } from './utils/Constant';

import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {

  const processSearch = (obj) => {
    const queryObj = {
      api_key : API_KEY
    };
    Object.assign(queryObj, obj);
    console.log(queryObj);
  };

  return (
    <div className="App">
      <section id="search">
        <Navbar/>
        <br/>
        <h1 className="ent-text-shadow">Let's Watch Movie</h1>
        <br/>
        <Search process={processSearch} />
      </section>
    </div>
  );
}

export default App;
