import React from 'react'
import SmoothBox from './SmoothBox';

function SmoothBoxList(props) {
  const {colors} = props;

  return (
    <div className="smooth-box-container">
      
      <div className="smooth-box">
        {colors.map(color => (
          <SmoothBox key={color.id} {...color}/>
        ))}
      </div>
    </div>
  )
}

export default SmoothBoxList
