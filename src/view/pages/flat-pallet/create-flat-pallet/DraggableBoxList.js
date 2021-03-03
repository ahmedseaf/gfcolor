import React from 'react'
import DraggableBox from './DraggableBox';
import {SortableContainer} from 'react-sortable-hoc';


const DraggableBoxList = SortableContainer(({colors, deleteBoxColor}) => {
  return (
    <div className="content">
      {colors.map((color, index) => (
        <DraggableBox color={color.color} 
          name={color.name} 
          key={color.name} 
          index={index}
          distance="20"
          deleteBox={() => deleteBoxColor(color.name)}
        />
      ))}
    </div>
  )
});
export default DraggableBoxList;