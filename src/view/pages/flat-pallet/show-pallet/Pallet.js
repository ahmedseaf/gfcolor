import React, { Component } from 'react';
import ColorBox from './ColorBox'
import Navbar from '../../../../header-components/Navbar'
import './Pallet.css';




class Pallet extends Component{
  constructor(props){
    super(props);

    this.state = {
      defaultConstruct : 500,
      colorMode : 'hex'
    };
    this.changeColorConstruct = this.changeColorConstruct.bind(this);
    this.changeColorMode = this.changeColorMode.bind(this);
  }
  changeColorConstruct(construct){
    this.setState({defaultConstruct: construct});
    // console.log(construct);
  }
  changeColorMode(value){
    this.setState({colorMode: value})
  } 
  render(){
    const colorConstruct = this.state.defaultConstruct;
    const mode = this.state.colorMode;
    const {colors, id} = this.props.colorPallet
    return(
      <div>
        <div className="Nav-header">
          <Navbar 
            default={this.state.defaultConstruct} 
            changeConstruct={this.changeColorConstruct}
            handleChange={this.changeColorMode}
            isSlider={true}
          />
        </div>
        
        <div className="color-box-container">
          {colors[colorConstruct].map(color => (
            <ColorBox background={color[mode]} colorName={color.name} key={color.id} mainPalletId={id} isLink={true} colorId={color.id} />
          ))}
        </div>
        
        {/* Footer */}
      </div>
    );
  }
}

export default Pallet;