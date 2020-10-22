import React, {useState} from 'react';
import blueTick from '../images/blueTick.png'
import clearTick from '../images/clearTick.png'

const Search = (props) => {
	const [searchField, setSearch] = useState("")
	const [seoClicked, setSEOclicked] = useState(false)
	const [longformClicked, setLongformclicked] = useState(false)
	//console.log(setSearch)
	const changeHandle = (e) => {
		setSearch(e.target.value)
		//console.log(props)
		props.setSearchWords(e.target.value)
	}

	const toggleLongForm = () => {
		//console.log("Longform")
		setLongformclicked(!longformClicked)
		{(!longformClicked)?props.setTags(20) : props.setTags('')}

	}
	const toggleSEO = () => {
		//console.log("SEO")
		setSEOclicked(!seoClicked)

		{(!seoClicked)?props.setTags('SEO') : props.setTags('')}
	}

  return (
    <div className = "search">
    <form>
	    <input type="text" onChange={changeHandle} className="form-control" placeholder="Takes an integer" value={searchField} required="" />
    </form>
    <a onClick = {toggleLongForm} value='Longform' href = "#" className="tickDropdownItem">
	    <img alt="ticks" src = {(longformClicked)?blueTick : clearTick} className="clearTick" />
	    <p> Longform
	    </p>
    </a>
    <a onClick = {toggleSEO} href = "#" className="tickDropdownItem">
	    <img alt="ticks" src = {(seoClicked) ? blueTick : clearTick} className="clearTick" />
	    <p> SEO Article
	    </p>
    </a>
    </div>
  )
}

export default Search;