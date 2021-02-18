import React, { useState, useEffect } from 'react';
import { Header, About, Creations, Footer } from './components';
import './App.scss';

const App = () => {
    const links = ['about', 'careers', 'events', 'products', 'support'],
          [viewport, setViewport] = useState(window.innerWidth);

    function useWindowSize() {
        useEffect(() => {
          function updateSize() {
            setViewport(window.innerWidth);
          }      
          window.addEventListener("resize", updateSize);
          updateSize();
          return () => window.removeEventListener("resize", updateSize);
        }, [viewport]);
    
        return viewport;
      }
      
    useWindowSize()

  return (
    <div className="App">
        <Header navlinks={links} viewport={viewport} />
        <About viewport={viewport}  />
        <Creations viewport={viewport} />
        <Footer navlinks={links} />      
    </div>
  );
}

export default App;
