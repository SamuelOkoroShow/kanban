 import React from 'react';

const card = (props) => {
    //1 this is the code for dragging cards
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

    //2 This is the code for highlighting multiple divs
    const mouseDown = () => {
        console.log("mousedown")
    }
        // I would have used redux to pass onmousedown from the root component
    const mouseMove = () => {
            console.log(props.mouseDownState)
        if(props.mouseDownState){
            console.log('item selected')
        }
    }
	
  return (
    <div
    id = {props.id}
    className = {props.className}
    onDragStart = {dragStart}
    onDragOver = {dragOver}
    draggable = 'true'
    onMouseMove = {mouseMove}
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