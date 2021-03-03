import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import colorLib from './lib/ColorLib';
import Pallet from './view/pages/flat-pallet/show-pallet/Pallet';
import {generateConstructPallet} from './helpers/ChromaHelper';
import FlatPallet from './view/pages/flat-pallet/FlatPallet';
import SingleFlatPallet from './view/pages/flat-pallet/SingleFlatPallet'; 
import CreateFlatPallet from './view/pages/flat-pallet/create-flat-pallet/CreateFlatPallet';
import SmoothPallet from './view/pages/flat-pallet/smooth-pallet/SmoothPallet';


import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    const localPallets = JSON.parse(window.localStorage.getItem("pallets"));
    this.state = { allPalletColors: localPallets || colorLib}
    // Binding 
    this.savePallet = this.savePallet.bind(this);
    this.findColorPalletId = this.findColorPalletId.bind(this);
  }
  // find route by colorPallet ID
  findColorPalletId(id){
    return this.state.allPalletColors.find(function(palletId){
      return palletId.id === id;
    });
  }

  savePallet(newPallet){
    this.setState({allPalletColors : [...this.state.allPalletColors, newPallet]}, this.savePalletToLocal);
  }

  savePalletToLocal(){
    window.localStorage.setItem("pallets", JSON.stringify(this.state.allPalletColors));
  }
  render(){
    return (
      
      <Switch>
        <Route exact path="/gfcolor" render={() => (<SmoothPallet />)} />
        
        <Route exact path="/flat-pallet" render={() => <FlatPallet colorPallet={this.state.allPalletColors}/>} />


        <Route exact path="/flat-pallet-create" 
          render={(routeProps) => <CreateFlatPallet savePallet={this.savePallet} allPallet={this.state.allPalletColors} {...routeProps}/> }
        />

        <Route exact path="/flat-pallet/:id" 
          render={routeProps => (
          <Pallet colorPallet={generateConstructPallet(this.findColorPalletId(routeProps.match.params.id))} />)} 
        />
                      
        <Route exact path="/flat-pallet/:palletId/:colorId" 
          render={routeProps => (
            <SingleFlatPallet 
              colorPallet={generateConstructPallet(this.findColorPalletId(routeProps.match.params.palletId))} 
              colorId={routeProps.match.params.colorId}
            />
          )} 
        />

      </Switch>
      
    )
  }
}

export default App;
