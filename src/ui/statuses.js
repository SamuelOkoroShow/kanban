import React from 'react';
import Board from './board'
import Card from './card'
const statuses = (props) => {
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
   	 {props.arr.map(each => <Card
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