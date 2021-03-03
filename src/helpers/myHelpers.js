const c = chroma.scale(['#fafa6e','#ff3399'])
    .mode('lab').colors(12);

    console.log(chroma(c[2]).css());


// Validation
ValidatorForm.addValidationRule('isColorNameUnique', value => 
      this.state.colors.every(
        ({name}) => name.toLowerCase() !== value.toLowerCase()
      )
    );



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


 
