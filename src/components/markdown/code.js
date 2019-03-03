import React from 'react';
import css from './style.module.scss';

export default class Code extends React.Component {
  render() {
    return (
      <span className={css.code}>
        {this.props.children}
      </span>
    );
  }
}
