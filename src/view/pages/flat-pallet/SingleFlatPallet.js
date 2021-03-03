import React, { Component } from 'react';
import ColorBox from './show-pallet/ColorBox';
import './show-pallet/ColorBox.css';
import Navbar from '../../../header-components/Navbar';
import './show-pallet/Pallet.css';
import './SingleFlatPallet.css';
import {Link} from 'react-router-dom';


class SingleFlatPallet extends Component{
  constructor(props){
    super(props);
    this.state = { colorMode : 'hex'};
    this._shade = this.getColor(this.props.colorPallet, this.props.colorId);
    this.changeColorMode = this.changeColorMode.bind(this);
  }

  getColor(pallet,colorName){
    let shades = [];
    let allColor = pallet.colors;

    for(let key in allColor){
      shades = shades.concat(
        allColor[key].filter(color => color.id === colorName)
      );
    }
    return shades.slice(1);
  }

  changeColorMode(value){
    this.setState({colorMode: value})
  } 

  render(){
    return (
      <div>
         <div className="Nav-header">
          <Navbar 
            isSlider={false}
            handleChange={this.changeColorMode}
          />
        </div>

        <div className="single-pallet color-box-container">
          {this._shade.map(color => (
            <ColorBox 
            background={color[this.state.colorMode]} 
            colorName={color.name} 
            key={color.name} 
            isLink={false} />
          ))}
          <div className="color-box go-back">
            <Link className="back" to={`/flat-pallet/${this.props.colorPallet.id}`}>Back</Link>
          </div>
        </div>
      </div>
      
    );
  }
}
export default SingleFlatPallet;