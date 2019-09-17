import React from 'react';
import './App.css';

import GitHubCalendar from 'react-github-calendar'

import A4 from './A4'
import Timeline from './Timeline/Timeline'
import Skills from './Skills'
import Header from './Header'
import Footer from './Footer'

import Motivation from './Motivation'
import Experience from './Experience'

class App extends React.Component {

  componentDidMount() {
    document.title = document.content.title
  }

  render () {
    const { title, header, timeline, skills, motivation, experience }
      = document.content

    return (
      <div className="App">
        <A4 className="PageOne">
          <Header content={ header } />
          <Timeline content={ timeline } />
          <Footer />
        </A4>
        <A4 className="PageTwo">
          <Motivation text={ motivation } />
          <Experience content={ experience }/>
          <Skills content={ skills } />
          <div className="Github">
            <GitHubCalendar username="whomenope" />
          </div>
        </A4>
      </div>
    )
  }
}

export default App;
