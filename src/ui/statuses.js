import React from 'react';
import Board from './board'
import Card from './card'
const statuses = (props) => {
  let sortedBlogs = props.arr.filter((words) => {return words >= props.searchWords});
  sortedBlogs = sortedBlogs.filter((words) => {return words >= props.searchTags});
  return (

    <div className='col-sm-4 statuses'>
    <table>
      <tbody className="tbody">
        <tr><td style = {{background: "#FBEDCE", width:"25px", height:'25px', fontFamily:'roboto', color:'#5b5b5b', padding:2, margin:'3'}}>{props.arr.length}</td><td style={{fontWeight:'500', fontSize:"14px", paddingLeft:"10px"}}>{props.title}</td></tr> 
      </tbody>
      </table>
      <div style={{marginTop:37}}>
        <Board 
    id = "board-1"
    className = "board"
    arr = {props.arr}
    {...props}
     >
     {sortedBlogs.map(each => <Card
          key = {each}
            id = {each}
            className = 'card'
            />)}
      
    </Board>
      </div>
      </div>
  )
}

export default statuses;