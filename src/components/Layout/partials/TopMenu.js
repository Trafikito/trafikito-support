import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LeftMenu from './LeftMenu';
import Search from './../../Search';
import {Link, withPrefix} from 'gatsby';

class TopMenu extends React.Component {
  state = {
    isLeftMenuOpen: false,
  };

  render() {
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              style={{marginLeft: -12, marginRight: 6}}
              onClick={() => this.setState({isLeftMenuOpen: true})}
            >
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" color="inherit" style={{flexGrow: 1}} noWrap>
              <Link to={'/'} style={{color: '#fff'}}>
                Help & Support
              </Link>
            </Typography>
            <Search/>

            <a className="lnu a-white" href={'https://trafikito.com/user/account/update-details'}>
              <IconButton color="inherit" aria-label="Account" style={{marginRight: -12}}>
                <AccountCircleIcon/>
              </IconButton>
            </a>
          </Toolbar>
        </AppBar>
        <LeftMenu
          isOpen={this.state.isLeftMenuOpen}
          handleClose={() => this.setState({isLeftMenuOpen: false})}
        />
      </>
    );
  }
}

export default TopMenu;
