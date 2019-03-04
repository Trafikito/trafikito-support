import React from 'react';
import PropTypes from 'prop-types';
import {green, red, orange} from '@material-ui/core/colors';

export default class MdIcon extends React.Component {
  static propTypes = {
    color: PropTypes.oneOf(['green', 'warn', 'error']),
    fontSize: PropTypes.string,
    marginTop: PropTypes.string,
  };

  render() {
    const fontSize = this.props.fontSize || '24px';
    const marginTop = this.props.marginTop || '6px';
    let color = 'inherit';
    switch (this.props.color) {
      case 'green':
        color = green[500];
        break;
      case 'warn':
        color = orange[500];
        break;
      case 'error':
      case 'red':
        color = red[500];
        break;
      default:
        color = 'inherit';
    }

    return (
      <i style={{fontSize, marginTop, color}} className="material-icons">{this.props.children[0]}</i>
    );
  }
}
