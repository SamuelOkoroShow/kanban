import React, {useState} from 'react';
import blueTick from '../images/blueTick.png'
import clearTick from '../images/clearTick.png'

const Search = (props) => {
	const [searchField, setSearch] = useState("")
	//console.log(setSearch)
	const changeHandle = (e) => {
		setSearch(e.target.value)
		//console.log(props)
		props.setSearchWords(e.target.value)
	}
  return (
    <div className = "search">
    <form>
	    <input type="text" onChange={changeHandle} className="form-control" placeholder="Search" value={searchField} required="" />
    </form>
    <div herf = "#" className="tickDropdownItem">
	    <img alt="ticks" src = {blueTick} className="clearTick" />
	    <p> Longform
	    </p>
    </div>
    <div herf = "#" className="tickDropdownItem">
	    <img alt="ticks" src = {clearTick} className="clearTick" />
	    <p> SEO Article
	    </p>
    </div>
    </div>
  )
}

export default Search;