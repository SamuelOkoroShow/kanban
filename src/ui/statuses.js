import React from 'react';
import EachStatus from './eachStatus'
import Board from './board'
import Card from './card'
const statuses = ({title, arr}) => {
  return (
    <div className='col-sm-3 statuses'>
      <tbody className="tbody">
        <tr><td style = {{background:'#d8d8d8', width:"20%", fontFamily:'roboto', color:'#5b5b5b', padding:2, margin:'3'}}>{arr.length}</td><td style={{fontWeight:'500', fontSize:"14px", paddingLeft:"10px"}}>{title}</td></tr> 
      </tbody>
      <div style={{marginTop:37}}>
      	{//arr.map(each => <EachStatus />)
      	}
      	<Board 
   	id = "board-1"
   	className = "board"
   	 >
   	 	<Card
   	 	id = "card-1"
   	 	className = 'card'
   	 	>
   	 	Card One
   	 	</Card>
   	 	<Card
   	 	id = "card-1"
   	 	className = 'card'
   	 	>
   	 	Card Two
   	 	
   	 	</Card>
   	</Board>
      </div>
      </div>
  )
}

export default statuses;