import React from 'react';
import css from './style.module.scss';

export default class Gif extends React.Component {
  render() {
    return (
      <span className={css.gif}>
        {this.props.children}
      </span>
    );
  }
}
