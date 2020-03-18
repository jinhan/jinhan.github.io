import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Navbar from 'components/Navbar';
import MainPage from 'components/MainPage';
import ProjectPage from 'components/ProjectPage';
import DataContext from 'components/DataContext';

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch('assets/data.json');
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div>
      {loading ? <div>Loading...</div> :
        <DataContext.Provider value={data}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Navbar />
            <Route exact path="/" component={MainPage} />
            <Route path="/project/:id" component={ProjectPage} />
          </BrowserRouter>
        </DataContext.Provider>
      }
    </div>
  );
}

export default App;
