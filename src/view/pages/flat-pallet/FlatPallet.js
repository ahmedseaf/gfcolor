import React, { Component } from 'react';
import MiniPallet from './MiniPallet';
import { withStyles } from '@material-ui/styles';
import {Link} from 'react-router-dom';
import MainNav from '../../../styles-component/navbar/MainNav'; 
 
const styles = {
  root: {
    backgroundColor: '#59b0e7',
    width: '100%',
    height: 'calc(100vh - 67px)',
    padding: '.5rem 0'
  },
  flatContainer : {
    maxWidth: '968px',
    width: '100%',
    margin: '0 auto',
  },
  nav:{
    display: 'flex',
    justifyContent: 'space-between',
    color: '#fff',
    alignItems: 'center',
    height: '108px',
    '& a': {
      textDecoration: 'none',
      color: '#fff'
    }
  },
  pallets:{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridGap: '1.5em',
  }
};
class FlatPallet extends Component{
  render(){
    const {colorPallet, classes} = this.props;
    return(
      <div>
        <MainNav />
        <div className={`${classes.root}  container-fluid`}>
          <div className={classes.flatContainer}>
            <div className={classes.nav}>
              <h1>Flat Pallet</h1>
              <Link to='/flat-pallet-create'>Create New</Link>
            </div>
            <div className={classes.pallets}>
              {colorPallet.map(pallet => (
                <MiniPallet key={pallet.id}  {...pallet} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(FlatPallet);