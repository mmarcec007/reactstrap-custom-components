import React, { Component } from 'react';
import ReactStrapForm from './components/ReactStrapForm/ReactStrapForm';
import './App.css';
import {mayasForm} from './constants/Forms/MayasForm';
import "bootstrap/dist/css/bootstrap.css";
import {addEventListenerToElement, extractFormFieldValues, eraseFormFieldValues,} from "./components/ReactStrapForm/Util/util";

class App extends Component {

  constructor(props) {
    super(props);
  }

  // mandatory implementation if you want to see your new data
  getFromSubmit = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div className="App">
          <ReactStrapForm formConfig={mayasForm}
                          getFromSubmit={(data) => this.getFromSubmit(data)}/>
      </div>
    );
  }
}

export default App;
