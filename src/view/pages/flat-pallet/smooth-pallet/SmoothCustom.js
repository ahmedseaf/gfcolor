import React from 'react'
import SmoothSketch from './SmoothSketch';
function SmoothCustom(props) {
 

  return (
    <div className="custom-color-control">
      
      <SmoothSketch 
        color={props.colorOne} 
        handleChange={props.handleChangeColorOne} 
        title="Chose Color End"
      />

      <SmoothSketch 
        color={props.colorTow} 
        handleChange={props.handleChangeColorTow} 
        title="Chose Color Start"
      />
    </div>
  )
}

export default SmoothCustom;
