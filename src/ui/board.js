import React from 'react';

const board = (props) => {
	const drop = e =>{
		e.preventDefault();
		const card_id = e.dataTransfer.getData('card_id')

		const card = document.getElementById(card_id)
		card.style.display = 'block'

		e.target.apendChild(card);
	}

	const dragOver = e => {
		e.preventDefault()
	}

  return (
    <div 
    id = {props.id}
    onDrop = {drop}
    onDragOver={dragOver}
    className = {props.className}
    >{props.children}</div>
  )
}

export default board;