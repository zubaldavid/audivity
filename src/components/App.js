import React from 'react'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

//App components

import Register from './Register';
import Login from './Login';
import Tutorial from './Tutorial';
import Modal from './Modal'
const App = () => (
  //Linking all of our routes
  <BrowserRouter>
      <div className = "container">
      <Route exact path="/" component= {Register}/>
      <Route path="/login" component= {Login}/>
      <Route path="/onboard" component= {Modal}/>
      </div>
  </BrowserRouter>
);

export default App
