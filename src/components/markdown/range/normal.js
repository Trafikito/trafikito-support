import React from 'react';

export default class RangeNormal extends React.Component {
  render() {
    return (
      <span style={{padding: '2px 6px', borderRadius: 3, backgroundColor: '#4CAF50', color: '#fff'}}>
        {this.props.children || <span>&nbsp;&nbsp;</span>}
      </span>
    );
  }
}
