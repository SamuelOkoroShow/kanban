import React from 'react';
import logo from './logo.svg';
import './App.css';
import './ui/bootstrap.css'
import Statuses from './ui/statuses'

function App() {
  return (
    <div className="App">
    <div className = 'container displayLine'>
      <Statuses title = "Requested" arr = {[1,2,3,4,5,6,7,8,9,10,11]} />
      <Statuses title = "Edit Requests" arr = {[]} />
      <Statuses title = "Edit Requests" arr = {[]} />
      <Statuses title = "Edit Requests" arr = {[]} />
      </div>
    </div>
  );
}

export default App;
