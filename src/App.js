import React from 'react';
import {Meme} from './components/Meme';
import Nav from './components/Nav';
import './style.css';
function App() {
  return (
    <div className="main">
      <Nav />
      <Meme />
    </div>
  );
}

export default App;
