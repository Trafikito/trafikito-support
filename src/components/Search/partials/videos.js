import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconClose from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card';
import blueGrey from '@material-ui/core/colors/blueGrey';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

const fuzzysort = require('fuzzysort');

class SearchResultsVideos extends React.Component {
  render() {
    const videos = [
      {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies enim tempor.',
        url: 'http://google.lt/',
        img: 'http://media.graytvinc.com/images/810*455/NATURE+GENERIC+TREES.jpg',
        tags: ['regex', ' workspace'],
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies enim tempor.',
        url: 'http://google.lt/',
        img: 'http://media.graytvinc.com/images/810*455/NATURE+GENERIC+TREES.jpg',
        tags: ['action body', 'data parsing'],
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies enim tempor.',
        url: 'http://google.lt/',
        img: 'http://media.graytvinc.com/images/810*455/NATURE+GENERIC+TREES.jpg',
        tags: ['action type', 'data splitting', 'workspace'],
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies enim tempor.',
        url: 'http://google.lt/',
        img: 'http://media.graytvinc.com/images/810*455/NATURE+GENERIC+TREES.jpg',
        tags: ['workspace', 'data splitting'],
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies enim tempor.',
        url: 'http://google.lt/',
        img: 'http://media.graytvinc.com/images/810*455/NATURE+GENERIC+TREES.jpg',
        tags: ['API call header'],
      },
    ];

    const cards = [];
    videos.forEach((video) => {
      cards.push(
        <div style={{margin: 4}}>
          <Card style={{width: 203, height: 297}}>
            <img src={video.img} alt={video.title} style={{width: 203, height: 115}}/>
            <Typography variant={'subtitle2'} style={{padding: '16px 16px 0', height: 110}}>
              {video.title.length > 63 ? `${video.title.substr(0, 60)}…` : video.title}
            </Typography>
            <Typography variant={'caption'} style={{padding: 16, height: 68, background: blueGrey[50]}} component={'div'}>
              {video.tags.join(', ')}
            </Typography>
          </Card>
        </div>,
      );
    });

    return (
      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
          height: 350,
        }}
      >
        {cards}
      </div>
    );
  }
}

export default SearchResultsVideos;
