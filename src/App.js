import React from 'react';
import './App.css';

import content from './data.js'

import GitHubCalendar from 'react-github-calendar'

import A4 from './A4'
import Timeline from './Timeline/Timeline'
import Header from './Header'
import Footer from './Footer'

import Motivation from './Motivation'
import Experience from './Experience'

function App() {
  const { header, timeline } = content

  return (
    <div className="App">
      <A4 className="PageOne">
        <Header content={ header } />
        <Timeline content={ timeline } />
        <Footer />
      </A4>
      <A4 className="PageTwo">
        <Motivation />
        <Experience />
        <div className="Github">
          <GitHubCalendar username="whomenope" />
        </div>
      </A4>
    </div>
  );
}

export default App;
