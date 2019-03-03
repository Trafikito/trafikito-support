import React from 'react';
import {amber} from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';

export default class Info extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: amber[200],
          padding: '12px 6px 12px 12px',
          borderLeft: `2px solid ${amber[600]}`,
          outline: `6px solid ${amber[200]}`,
          margin: '24px 0',
        }}
      >
        <Typography component={'dev'} variant={'body1'}>
          {this.props.children}
        </Typography>
      </div>
    );
  }
}
