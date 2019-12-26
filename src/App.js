import React, { useState } from 'react';
import Axio from 'axios';
import './App.css';

import { API_END_POINT, API_KEY, toQueryString } from './utils/Constant';

import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {

  const [movieList, setMovieList] = useState([]);

  const processSearch = async (obj) => {
    const queryObj = {
      api_key : API_KEY
    };
    Object.assign(queryObj, obj);
    
    const link = API_END_POINT + '/search/movie?' + toQueryString(queryObj);
    console.log(link);
    const res = await Axio.get(link);
    setMovieList(res.data.results);
  };

  return (
    <div className="App">
      <section id="search">
        <Navbar/>
        <br/>
        <h1 className="ent-text-shadow">Let's Watch Movie</h1>
        <br/>
        <Search process={processSearch} />
        <br/>
        {
          movieList.map(m => (
            <div key={m.id} className="movie-card">
              <h3>{m.title}</h3>
              <p>{m.overview}</p>
            </div>
          ))
        }
      </section>
      <section>
        <h2>sai Han</h2>
      </section>
    </div>
  );
}

export default App;
