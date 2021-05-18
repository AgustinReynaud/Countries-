import './App.css';
import React from 'react';

import {

  Route
} from "react-router-dom";

import Landingpage from './Components/Landing/Landing';
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home';
import CreateActivity from './Components/CreateActivity/CreateActivity';
import Detail from './Components/Detail/Detail';


export function App() {
  return (
    <React.Fragment>
      <div className="lnd">
        <Route exact path="/" component={Landingpage} />
        <div className="homee">
          <Route path="/home" component={Nav} />

          <Route exact path="/home" component={Home} />
          <Route exact path="/home/detail/:idPais" component={Detail} />
          <Route exact path="/activity" component={CreateActivity} />

        </div>
      </div>
    </React.Fragment>
  );
}

export default App




