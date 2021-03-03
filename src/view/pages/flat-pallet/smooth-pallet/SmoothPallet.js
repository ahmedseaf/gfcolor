import React, { Component } from 'react';
import chroma from 'chroma-js';
import MainNav from '../../../../styles-component/navbar/MainNav';
import {smoothColor} from '../../../../helpers/ChromaHelper';
import SmoothBoxList from './SmoothBoxList';
import SmoothCustom from './SmoothCustom';


import './SmoothPallet.css';





class SmoothPallet extends Component{
  constructor(props){
    super(props);
    this.state = {
      colorType         : 'hex',
      customColorCount  : 5,
      pickColorOne      : '#f976a3',
      pickColorTow      : '#fff700',
      smoothBoxOne      : smoothColor(14),
      smoothBoxTow      : smoothColor(7),
      smoothBoxTree     : smoothColor(14)
    }


    // binding
   this.customColorGenerate   = this.customColorGenerate.bind(this)
   this.handleChangeColorOne  = this.handleChangeColorOne.bind(this)
   this.handleChangeColorTow  = this.handleChangeColorTow.bind(this)
  }


  customColorGenerate(){
    let colorsPallet = [];
    const colors = chroma.scale([this.state.pickColorOne,this.state.pickColorTow]).mode('lab').colors(21);
    for(let i in colors){
      colorsPallet.push({
        name: `color ${i}`,
        id : `color-${colors[i]}`,
        hex: colors[i],
      })
    }
    return colorsPallet;

  }

  
  handleChangeColorOne(color){
    this.setState({pickColorOne: color.hex});
  }

  handleChangeColorTow(color){
    this.setState({pickColorTow: color.hex});
  }

  render(){
    // console.log(this.customColorGenerate());
    return(
      <div>
        {/* Navbar */}
        <MainNav />
        <div className="smooth-pallet-container">
       
          <div className="container">
            <SmoothCustom 
              colorOne={this.state.pickColorOne} 
              colorTow={this.state.pickColorTow} 
              handleChangeColorOne={this.handleChangeColorOne}
              handleChangeColorTow={this.handleChangeColorTow}
            />

            
            <SmoothBoxList 
              colors={this.customColorGenerate()} 
              colorMode={this.state.colorType}
              
            />


            <h2>Smooth Palette One</h2>
            <SmoothBoxList colors={this.state.smoothBoxOne} colorMode={this.state.colorType}/>
            <h2>Smooth Palette Tow</h2>
            <SmoothBoxList colors={this.state.smoothBoxTow} colorMode={this.state.colorType}/> 
            <h2>Smooth Palette Three</h2>
             <SmoothBoxList colors={this.state.smoothBoxTree} colorMode={this.state.colorType}/>


          </div>
        </div>
      </div>
    )
  }
}

export default SmoothPallet;