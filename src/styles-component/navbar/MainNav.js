import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import './MainNav.css';

function MainNav() {

  // eslint-disable-next-line no-native-reassign
  const logoSrc = require = ('../../../gfcolor/assets/logo/myLogo.svg');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


    return(
      <div className="main-nav-container">
        <div className="main-nav">
          <div className="logo">
            <img src={logoSrc} alt="Logo" />
            <Link className="logo-link" to="/gfcolor">GF-Color</Link>
          </div>
          <div className="github">
            <Link to="/https://github.com/ahmedseaf/gfcolor"><GitHubIcon /> Github</Link>
          </div>
          <div className="select">
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              Color Pages
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
               <MenuItem onClick={handleClose}>
                <Link to="/gfcolor">Smooth Palette</Link>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <Link to="/flat-pallet">Flat Palette</Link>
              </MenuItem>
              
              <MenuItem onClick={handleClose}>
                <Link to="/flat-pallet-create">Create Flat Palette</Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    );


}
export default MainNav;