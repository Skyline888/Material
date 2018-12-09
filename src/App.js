import React, { Component } from 'react';
import './App.css';
import Content from './components/Profile';
import 'typeface-roboto';
// import Icon from '@material-ui/core/Icon';

import { muscles, exercises} from "./store.js";

import {Header, Footer} from './components/Layouts';
import Exercises from './components/Exercises';

class App extends Component {

  state = {
    exercises
  };

  getExtercisesByMuscles() {
      return Object.entries(
          this.state.exercises.reduce((exercises, exercise) => {
              const { muscles } = exercise;

              exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise];

              return exercises;
          },{})
      )
  }

  render() {
    console.log(this.getExtercisesByMuscles());
    const exercises = this.getExtercisesByMuscles();
    return (
      <div className="App">
          <Header/>
          <div>
              <Exercises
                  exercises = {exercises}
              />
              <Content/>
          </div>
          <Footer
            muscles = {muscles}
          />
      </div>
    );
  }
}

export default App;
