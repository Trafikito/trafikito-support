import React from 'react';

export default class RangeError extends React.Component {
  render() {
    return (
      <span style={{padding: '2px 6px', borderRadius: 3, backgroundColor: '#f44336', color: '#fff'}}>
        {this.props.children || <span>&nbsp;&nbsp;</span>}
      </span>
    );
  }
}
