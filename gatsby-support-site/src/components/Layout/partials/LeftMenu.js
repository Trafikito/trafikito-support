import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import LeftMenuItem from './LeftMenuItem';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import StorageIcon from '@material-ui/icons/Storage';

class LeftMenu extends React.Component {
  render() {
    const isOpen = this.props.isOpen;
    const handleClose = this.props.handleClose;

    return (
      <Drawer open={isOpen} onClose={handleClose}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '12px 3px'}}>
          <div>
            <Typography align={'center'} variant={'h5'}>Trafikito</Typography>
            <Typography align={'center'} variant={'caption'}>MONITOR ANYTHING</Typography>
          </div>
        </div>
        <Divider/>
        <List>
          <a className="lnu" href={'https://trafikito.com'} onClick={handleClose}>
            <LeftMenuItem isActive={false} icon={<HomeIcon/>} title={'Home'}/>
          </a>
          <a className="lnu" href={'https://trafikito.com/servers'} onClick={handleClose}>
            <LeftMenuItem isActive={false} icon={<StorageIcon/>} title={'Dashboard'}/>
          </a>
          <a className="lnu" href={'https://trafikito.com/user/account/update-details'} onClick={handleClose}>
            <LeftMenuItem isActive={false} icon={<AccountBoxIcon/>} title={'My Account'}/>
          </a>
          <a className="lnu" href={'https://trafikito.com/price'} onClick={handleClose}>
            <LeftMenuItem isActive={false} title={'Price'}/>
          </a>
          <a className="lnu" href={'https://trafikito.com/who-built-this'} onClick={handleClose}>
            <LeftMenuItem isActive={false} title={'Who built this?'}/>
          </a>
          <a className="lnu" href={'https://trafikito.com/support'} onClick={handleClose}>
            <LeftMenuItem isActive={false} title={'Help & Support'}/>
          </a>
        </List>
      </Drawer>
    );
  }
}

LeftMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default LeftMenu;
