import React from 'react';
import eye from '../images/eye.png'
import filter from '../images/filter.png'
import search from '../images/search.png'
import sort from '../images/sort.png'

const statusBar = (props) => {
  return (
    <div className = "statusBar">
	    <div style={{alignItems:'center', display:'flex'}}>
	    <img src = {eye} style={{width:22, height:15}} alt = 'eye-logo'/>
	    <div className="statusBarTitle">Status</div>
	    </div>
	    <div style={{alignItems:'center', display:'flex'}}>
		    <div style={{alignItems:'center', display:'flex'}}>
		    <img src = {filter} style={{width:18, height:12}} alt = 'filter-logo'/>
		    <div className="statusBarTitle">Filter</div>
		    </div>
		    <div style={{alignItems:'center', display:'flex'}}>
		    <img src = {sort} style={{width:18, height:12}} alt = 'sort-logo'/>
		    <div className="statusBarTitle">Sort</div>
		    </div>
		    <div style={{alignItems:'center', display:'flex'}}>
		    <img src = {search} style={{width:17, height:12}} alt = 'search-logo'/>
		    <div className="statusBarTitle">Search</div>
		    </div>
	    </div>
    </div>
  )
}

export default statusBar;