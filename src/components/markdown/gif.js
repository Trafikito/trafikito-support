import React from 'react';
import css from './style.module.scss';

export default class Gif extends React.Component {
  render() {
    return (
      <div className={css.gif}>
        {this.props.children}
      </div>
    );
  }
}
