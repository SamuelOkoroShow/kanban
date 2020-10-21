import React, {useState} from 'react';

import './ui/bootstrap.css'
import './App.css';
import Statuses from './ui/statuses'
import StatusBar from './ui/statusBar'


var arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
var arr2 = [];
var inRevisonArr = [1];


function App() {
  return (
    <Navbar>
    <NavItem icon="🥰" />
    <NavItem icon="🥰" />
    <NavItem icon="🥰" />
    <NavItem icon="😇">
    	<DropdownMenu></DropdownMenu>
    </NavItem>
    </Navbar>
  );
}

function DropdownMenu() {
	function DropdownItem(props) {
		return(<a href="#" className='menu-item'>
		<span className='icon-button'>{props.leftIcon}</span>
		{props.children}
		<span className = "icon-button">{props.rightIcon}</span>
		</a>
		)
	}

	return(<div className="dropdown">
	<DropdownItem>My Profile</DropdownItem>
	<DropdownItem
		leftIcon = "😇"
		rightIcon = "😇">
		</DropdownItem>
	</div>)
}


function Kanban() {
	const [arr1State, setArr1] = useState(arr1); 
	const [arr2State, setArr2] = useState(arr2); 
	const [inRevisonArrState, setInRevisionArr] = useState(inRevisonArr); 
	

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

	return(<div className="App container">
    <StatusBar />
	    <div className='flexbox' >
		   	<Statuses title = "Requested" arr = {arr1State} />
		   	<Statuses title = "Edit Requested"  arr = {arr2State} updateArray={addItem} />
		   	<Statuses title = "In Revision"  arr = {inRevisonArrState} updateArray={addItem} />
	    </div>
    </div>)
}

function NavItem(props) {
	const [open, setOpen] = useState(false)
	return(<li className = "nav-item">
		<a href = "#" onClick = {() => setOpen(!open)} className="icon-button">
		{props.icon}
		</a>
		{open && props.children}
		</li>)
}

function Navbar(props) {
	return (
		<nav className='navbar'>
			<ul className='navbar-nav'>
			{props.children}
			</ul>
		</nav>
		);
}



export default App;
//