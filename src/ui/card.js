import React from 'react';

const card = (props) => {
	const dragStart = e => {
		const target = e.target;

		e.dataTransfer.setData('card_id',target.id)
		setTimeout(() => {
			target.style.display = 'none'
		}, 0)
	}

	const dragOver = e => {
		e.stopPropagation()
	}
	
  return (
    <div
    id = {props.id}
    className = {props.className}
    onDragStart = {dragStart}
    onDragOver = {dragOver}
    draggable = 'true'
    >
    <div className = "eachStatus"> 
      <p className = "eachTitle">Flow Meter Measurement Errors</p> 
      <p className = "eachLink">https://blog.gesrepair.com/</p> 
    	<div style={{display:'in-line'}}>
    	<p className='longform' style={{paddingTop:"10px"}}>Longform</p>
    	</div>
    	<div style={{display:'in-line'}}>
    	<p className='longform'>09/15/2019</p>
    	</div>
    </div>
    </div>
  )
}

export default card;