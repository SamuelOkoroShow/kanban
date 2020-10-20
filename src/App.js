import React, {useState} from 'react';
import './App.css';
import './ui/bootstrap.css'
import Statuses from './ui/statuses'


var arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
var arr2 = [];


function App() {
	const [arr1State, setArr1] = useState(arr1); 
	const [arr2State, setArr2] = useState(arr2); 
	

 const addItem = (item) => {
    
    setArr2(arr2State.push(item).toString(10).replace(/\D/g, '0').split(''));

    const index = arr1.indexOf(item);
if (index > -1) {
  arr1.splice(index, 1);
}
setArr1(arr1)

// array = [2, 9]
console.log(arr2State); 
  };

  return (
    <div className="App flexbox">
   	<Statuses title = "Requested" arr = {arr1State} />
   	<Statuses title = "Edit Requested"  arr = {arr2State} updateArray={addItem} />
    </div>
  );
}

export default App;
//