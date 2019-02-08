import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import blueGrey from '@material-ui/core/colors/blueGrey';

const LeftMenuItem = (props) => {
  const {icon, isActive, title} = props;

  const color = isActive ? blueGrey[500] : null;
  const colorText = isActive ? '#FFFFFF' : null;

  return (
    <ListItem button style={{backgroundColor: color}}>
      {icon ? <ListItemIcon style={{color: colorText}}>{icon}</ListItemIcon> : null}
      <ListItemText
        disableTypography={false}
        primary={<span style={{color: colorText}}>{title}</span>}
      />
    </ListItem>
  );
};

LeftMenuItem.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  isActive: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default LeftMenuItem;
