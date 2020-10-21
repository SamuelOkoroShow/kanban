import React, {useState} from 'react';
import eye from '../images/eye.png'
import filter from '../images/filter.png'
import search from '../images/search.png'
import sort from '../images/sort.png'
import Search from './search'

function StatusBar(props){
	const [open, setOpen] = useState(false);

  return (
    <div className = "statusBar">
	    <div style={{alignItems:'center', display:'flex'}}>
	    <img src = {eye} style={{width:22, height:15}} alt = 'eye-logo'/>
	    <div className="statusBarTitle">Status</div>
	    </div>
	    <div style={{alignItems:'center', display:'flex'}}>
		    <a href="#" className = "sorts" style={{alignItems:'center', display:'flex'}}>
		    <img src = {filter} style={{width:18, height:12}} alt = 'filter-logo'/>
		    <div className="statusBarTitle">Filter</div>
		    </a>
		    <a href="#" className = "sorts" style={{alignItems:'center', display:'flex'}}>
		    <img src = {sort} style={{width:18, height:12}} alt = 'sort-logo'/>
		    <div className="statusBarTitle">Sort</div>
		    </a>
		    <a href="#" onClick = {() => {setOpen(!open)}} className = "sorts" style={{alignItems:'center', display:'flex'}}>
		    <img src = {search} style={{width:13, height:12}} alt = 'search-logo'/>
		    <div className="statusBarTitle">Search</div>
		    </a>
	    </div>
	    {open && <Search />}
    </div>
  )
}

export default StatusBar;