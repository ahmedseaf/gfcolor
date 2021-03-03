import React from 'react'
import {SortableElement} from 'react-sortable-hoc';
import DeleteIcon from '@material-ui/icons/Delete';

const DraggableBox = SortableElement((props) => {
  const {name, color, deleteBox} = props
  return (
    <div className="box-container" style={{ backgroundColor: color }} key={name}>
      <div className="box-content">
        <span>{name}</span>
        <DeleteIcon  onClick={deleteBox}/>
      </div>
    </div>
  )
});

export default DraggableBox;

