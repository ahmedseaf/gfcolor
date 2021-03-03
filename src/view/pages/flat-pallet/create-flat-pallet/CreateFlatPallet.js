import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { SketchPicker } from 'react-color';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import DraggableBoxList from './DraggableBoxList';
import {arrayMove} from 'react-sortable-hoc';
import './CreateFlatPallet.css';
import MainNav from '../../../../styles-component/navbar/MainNav';

class CreateFlatPallet extends Component{
  static defaultProps ={
    maxColorPallet : 20
  };
  constructor(props){
    super(props)
    this.state = {
      pickColor: '#f50057',
      colors: [],
      colorName : "" ,
      newPalletName: ""     
    };
 
    // Binding
    this.clearColor               = this.clearColor.bind(this);
    this.addNewColor              = this.addNewColor.bind(this);
    this.deleteBoxColor           = this.deleteBoxColor.bind(this);
    this.createRandomColor        = this.createRandomColor.bind(this);
    this.handleChangeValue        = this.handleChangeValue.bind(this);
    this.handleSubmitSavePallet   = this.handleSubmitSavePallet.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', value => 
      this.state.colors.every(
        ({name}) => name.toLowerCase() !== value.toLowerCase()
      )
    );

    ValidatorForm.addValidationRule('isColorUnique', value => 
      this.state.colors.every(
        ({color}) => color !== this.state.pickColor
      )
    );

    ValidatorForm.addValidationRule('isPalletNameUnique', value => 
      this.props.allPallet.every(
        ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleChangeColor = (color) => {
    this.setState({ pickColor: color.hex });
  };

  clearColor(){
    this.setState({colors: []});
  }
  createRandomColor(){
    // Random Color from existing PPallet
    const allColor = this.props.allPallet.map(pallet => pallet.colors).flat();
    let rand = Math.floor(Math.random() * allColor.length);
    const randomColor = allColor[rand];
    this.setState({
      colors: [...this.state.colors, randomColor]
    });
    
  }
  addNewColor(){
    const newColor = {
      color: this.state.pickColor,
      name : this.state.colorName
    };
    this.setState({ colors: [...this.state.colors, newColor] });
  };
  handleChangeValue(e){
    this.setState({[e.target.name] : e.target.value});
  }

  handleSubmitSavePallet(){
    let newName = this.state.newPalletName;
    const newPallet = {
      paletteName: newName,
      id: newName.replace(/ /g, '-'),
      colors: this.state.colors
    };
    this.props.savePallet(newPallet);
    // Redirect To Home Pallet
    this.props.history.push('/flat-pallet')
  }

  deleteBoxColor(colorName){
    //console.log(colorName)
    this.setState({
      colors: this.state.colors.filter(color => color.name != colorName)
    });
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({colors}) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  render(){
    const isFullPalletColor = this.state.colors.length >= this.props.maxColorPallet;
    return(
      <div>
        <MainNav />
        <div className="create-pallet-container container-fluid">
          <div className="left-side">
            <h1>Create New Color</h1>
            <div className="Control-add">
              <Button variant="contained" color="secondary" onClick={this.clearColor}>
                clear
              </Button>
              <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={this.createRandomColor}
                  disabled={isFullPalletColor}
                >
                Random
              </Button>
            </div>
            <div className="color-picker">
              <SketchPicker
                color={ this.state.pickColor }
                onChange={ this.handleChangeColor }
              />
            </div>
            <div className="color-name">
            <ValidatorForm onSubmit={this.addNewColor}>
              <TextValidator
                  onChange={this.handleChangeValue}
                  label="Color Name"
                  name="colorName"
                  value={this.state.colorName}
                  validators={['required', 'isColorNameUnique', 'isColorUnique']}
                  errorMessages={['Add Name For This Color', 'This Name Already Taken', 'You Must Change New Color']}
              />
              <Button variant="contained" 
                style={{ backgroundColor: this.state.pickColor }}
                type="submit"
                disabled={isFullPalletColor}
                >
                  Add Color
              </Button>
            </ValidatorForm>
            </div>
            <div className="add-new-color">
              
            </div>
          </div>
          <div className="content-container"> 
            <div className="top-header-content">
              <ValidatorForm onSubmit={this.handleSubmitSavePallet}>
                <TextValidator 
                    onChange={this.handleChangeValue}
                    label="Palette Name"
                    name="newPalletName"
                    value={this.state.newPalletName}
                    validators={['required', 'isPalletNameUnique']}
                    errorMessages={['Add Name For This Palette ', 'This Palette Name Already Taken']}
                />
                <Button variant="contained" 
                  color="secondary"
                  type="submit"
                  >
                    Save Pallet
                </Button>
              </ValidatorForm>
              <Link to='/flat-pallet'>
                <Button variant="contained" 
                  color="secondary"
                  type="submit"
                  >
                    Back
                </Button>
              </Link>
            </div>
            <div>
              <DraggableBoxList 
                axis="xy"
                colors={this.state.colors} 
                deleteBoxColor={this.deleteBoxColor}
                onSortEnd={this.onSortEnd}
              />
            </div>
          </div> 
        </div>
      </div>
    );
  }
}


export default CreateFlatPallet;