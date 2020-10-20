import React from 'react';
import './App.css';
import './ui/bootstrap.css'
import Statuses from './ui/statuses'
import Board from './ui/board'
import Card from './ui/card'

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];


function App() {
  return (
    <div className="App flexbox">
   	<Statuses title = "Requested" arr = {arr} />
    </div>
  );
}

export default App;
