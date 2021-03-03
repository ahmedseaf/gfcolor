import React, { Component } from 'react';
import Slider from 'rc-slider';
import {Link} from 'react-router-dom';
// Select Box
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
// Snackbar
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component{
  constructor(props){
    super(props);
    this.state ={
       colorMode : 'hex' ,
       messageOpen: false
       };
    this.handleChange = this.handleChange.bind(this);
    this.handleCloseMessage = this.handleCloseMessage.bind(this);
  }
  handleChange(e) {
    this.setState({
      colorMode : e.target.value,
      messageOpen : true
      });
    this.props.handleChange(e.target.value);

  }
  handleCloseMessage(){
    this.setState({messageOpen : false})
  }
  render(){
    const handleClose = this.handleCloseMessage;
    const logoSrc = require = ('../../gfcolor/assets/logo/myLogo.svg');
    return(
      <div className="Navbar-container">
        <div className="Navbar">
          <div className="Logo-container">
            <div className="Logo">
              <img src={logoSrc} alt="Logo" />
              <Link className="logo-link" to="/gfcolor">GF-Color</Link>
            </div>
            {this.props.isSlider &&(
              <div className="Slider">
                <Slider defaultValue={this.props.default} min={100} max={900} step={100} onAfterChange={this.props.changeConstruct}/>
              </div>
            )}
          </div>
          <div className="content">
            <Select value={this.state.colorMode} onChange={this.handleChange}>
              <MenuItem value="hex">HEX - #FFFFFF </MenuItem>
              <MenuItem value="rgb">RGB - (255,255,255)</MenuItem>
              <MenuItem value="rgba">RGBA - (255,255,255,1)</MenuItem>
            </Select>
          </div>

          {/* Message */}
          <div>
            <Snackbar
              anchorOrigin={{vertical: 'bottom',horizontal: 'left',}}
              open={this.state.messageOpen}
              autoHideDuration={3000}
              onClose={handleClose}
              message={<span id="message-id">Color Mode Changed</span>}
              ContentProps={{"aria-describedby" : "message-id"}}
              action={
                <React.Fragment>
                  <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>
              }
            />
          </div>
          {/* End Message */}
        </div>
      </div>

    );
  }
}

export default Navbar;