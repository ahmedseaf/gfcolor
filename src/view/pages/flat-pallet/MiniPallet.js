import React from 'react';
import { withStyles } from '@material-ui/styles';
import {Link} from 'react-router-dom';

const styles = {
  root: {
    border: '4px solid #fff',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  palletBoxContainer:{
    minHeight: "190px",
  },
  palletBox:{
    display: 'flex',
    flexDirection: 'column',
  },
  palletColorContainer:{
    height: '165px',
    overflow: 'hidden',
    display: 'flex',
    flexWrap: 'wrap',
  },
  palletColor : {
    width: '25%',
    height: '20%'
  },
  palletFooter:{
    height: '45px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 3px',
    backgroundColor: '#fff',
  },
  link:{
    textDecoration: 'none',
    fontSize: '1.1em',
    fontWeight: '600'
  }
};

function MiniPallet(props) {
  const {classes, paletteName,id, emoji, colors} = props;
  return (
    <div className={classes.root}>
      <div className={classes.palletBoxContainer}>
        <div className={classes.palletBox}>
          <div className={classes.palletColorContainer}>
            {colors.map(color => ( 
              <div className={classes.palletColor} key={color.name} style={{ backgroundColor: color.color }}></div>
            ))}
          </div>
          <div className={classes.palletFooter}>
            <Link className={classes.link}  to={`/flat-pallet/${id}`}>{paletteName}</Link>
            <p>{emoji}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPallet)

