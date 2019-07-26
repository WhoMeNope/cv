import React from 'react';
import './App.css';

import A4 from './A4'
import Timeline from './Timeline'
import Header from './Header'

function App() {
  return (
    <div className="App">
      <A4>
        <Header />
        <Timeline />
      </A4>
      <A4>
        <Header />
        <Timeline />
      </A4>
    </div>
  );
}

export default App;
