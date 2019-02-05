import React, { Component } from 'react';
import ReactStrapForm from './components/ReactStrapForm/ReactStrapForm';
import './App.css';
import {mayasForm} from './constants/Forms/MayasForm';
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {

  constructor(props) {
    super(props);
  }

  // mandatory implementation if you want to see your new data
  getDataFromSubmit = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div className="App">
          <ReactStrapForm formConfig={mayasForm}
                          getDataFromSubmit={(data) => this.getDataFromSubmit(data)}/>
      </div>
    );
  }
}

export default App;
