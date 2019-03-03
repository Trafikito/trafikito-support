import React from 'react';
import {grey} from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';

export default class Quote extends React.Component {
  render() {
    return (
      <span
        style={{
          display: 'block',
          backgroundColor: grey[200],
          padding: '12px 6px 12px 12px',
          borderLeft: `2px solid ${grey[500]}`,
          outline: `6px solid ${grey[200]}`,
          margin: '24px 0',
        }}
      >
        <Typography component={'span'} style={{display: 'block'}} variant={'body1'}>
          {this.props.children}
        </Typography>
      </span>
    );
  }
}
