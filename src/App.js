import React, { Component } from 'react';
import './App.css';
import Content from './components/Profile';
import 'typeface-roboto';
// import Icon from '@material-ui/core/Icon';

import {Header, Footer} from './components/Layouts';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <div>
              <Content/>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
