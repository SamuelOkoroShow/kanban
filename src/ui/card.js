import React from 'react';

const card = (props) => {
  return (
    <div
    id = {props.id}
    onDragStart = {dragStart}
    onDragOver = {dragOver}
    draggable = 'true'
    >
    {props.children}
    </div>
  )
}

export default card;