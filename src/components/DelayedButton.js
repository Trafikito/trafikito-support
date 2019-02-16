import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ButtonBase from '@material-ui/core/ButtonBase';

/*
*
* When user clicks on button which navigates user doesn't see animation of button clicked
* This component delays when onClick handler is fired by 250ms to animate button click event
*
* */

class DelayedButton extends Component {
  static propTypes = {
    children: PropTypes.node,
    iconButton: PropTypes.bool,
    buttonBase: PropTypes.bool,
    onClick: PropTypes.func,
  };

  componentWillUnmount() {
    if (this.timers.length > 0) {
      this.timers.forEach((timer) => clearTimeout(timer));
    }
  }

  timers = [];

  handleOnClick = () => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      this.timers.splice(this.timers.indexOf(timer), 1);
      this.props.onClick();
    }, 250);
    this.timers.push(timer);
  };

  render() {
    const props = {...this.props};
    delete props.iconButton;
    delete props.buttonBase;
    delete props.onClick;
    delete props.children;

    if (this.props.iconButton === true) {
      return <IconButton {...props} onClick={this.handleOnClick}>{this.props.children}</IconButton>;
    } else if (this.props.buttonBase === true) {
      return <ButtonBase {...props} onClick={this.handleOnClick}>{this.props.children}</ButtonBase>;
    }
    return <Button {...props} onClick={this.handleOnClick}>{this.props.children}</Button>;
  }
}

export default DelayedButton;
