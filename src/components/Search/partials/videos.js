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
import Fab from '@material-ui/core/Fab';
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
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import css from './../style.module.scss';

const fuzzysort = require('fuzzysort');

class SearchResultsVideos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos_count: localStorage.getItem('dev_videos_count') || 4,
      offset: 0,
    };
  }

  render() {
    let samples = [
      {
        id: 'video-1',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies enim tempor.',
        url: 'http://google.lt/',
        img: 'http://media.graytvinc.com/images/810*455/NATURE+GENERIC+TREES.jpg',
        tags: ['regex', ' workspace'],
      },
      {
        id: 'video-2',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies enim tempor.',
        url: 'http://google.lt/',
        img: 'http://media.graytvinc.com/images/810*455/NATURE+GENERIC+TREES.jpg',
        tags: ['action body', 'data parsing'],
      },
      {
        id: 'video-3',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies enim tempor.',
        url: 'http://google.lt/',
        img: 'http://media.graytvinc.com/images/810*455/NATURE+GENERIC+TREES.jpg',
        tags: ['action type', 'data splitting', 'workspace'],
      },
      {
        id: 'video-4',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies enim tempor.',
        url: 'http://google.lt/',
        img: 'http://media.graytvinc.com/images/810*455/NATURE+GENERIC+TREES.jpg',
        tags: ['workspace', 'data splitting'],
      },
      {
        id: 'video-5',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies enim tempor.',
        url: 'http://google.lt/',
        img: 'http://media.graytvinc.com/images/810*455/NATURE+GENERIC+TREES.jpg',
        tags: ['API call header'],
      },
    ];

    samples = [
      ...samples,
      ...samples,
      ...samples,
      ...samples,
      ...samples,
      ...samples,
      ...samples,
      ...samples,
      ...samples,
      ...samples,
      ...samples,
      ...samples,
    ];

    const videos = [];
    for (let i = 0; i < this.state.videos_count; i++) {
      if (samples.length > 0) {
        videos.push(samples.pop());
      }
    }

    const cards = [];
    videos.forEach((video, index) => {
      cards.push(
        <div style={{margin: 4}} key={video.id}>
          <Card style={{width: 205}}>
            <img src={video.img} alt={video.title} style={{width: 205, height: 115}}/>
            <Typography variant={'subtitle2'} style={{padding: '16px 16px 0', height: 110}}>
              {index + 1} {video.title.length > 83 ? `${video.title.substr(0, 80)}…` : video.title}
            </Typography>
          </Card>
        </div>,
      );
    });

    let showScroll = videos.length > 4 + this.state.offset;

    return (
      <>
        <div style={{position: 'relative'}}>
          <div style={{overflow: 'hidden', margin: '0 46px 0 0'}}>
            <div
              style={{
                position: 'relative',
                left: this.state.offset * 213 * -1,
                transition: 'left 350ms',
                display: 'flex',
              }}
            >
              {cards}
            </div>
          </div>
          {
            showScroll && (
              <div
                style={{
                  position: 'absolute',
                  transition: 'all 350ms',
                  right: 0,
                  top: 86,
                }}
              >
                <Fab
                  color={'primary'}
                  classes={{root: css.fab_root}}
                  aria-label="Next"
                  onClick={() => {
                    let newOffset = this.state.offset + 3;
                    this.setState({offset: newOffset});
                  }}
                >
                  <KeyboardArrowRight/>
                </Fab>
              </div>
            )
          }
          {
            this.state.offset > 0 && (
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 86,
                }}
              >
                <Fab
                  color={'primary'}
                  classes={{root: css.fab_root}}
                  aria-label="Next"
                  onClick={() => {
                    let newOffset = this.state.offset - 4;
                    this.setState({offset: newOffset < 0 ? 0 : newOffset});
                  }}
                >
                  <KeyboardArrowLeft/>
                </Fab>
              </div>
            )
          }
        </div>
        <div style={{marginTop: 52}}>
          <input
            type="number"
            value={this.state.videos_count}
            onChange={(e) => this.setState({videos_count: e.target.value})}
          />
          state:
          <div>
            {JSON.stringify(this.state)}
          </div>
          <button onClick={() => localStorage.setItem('dev_videos_count', this.state.videos_count)}>save videos count
          </button>
          <button onClick={() => this.setState({offset: 0})}>reset offset</button>
        </div>
      </>
    );
  }
}

export default SearchResultsVideos;
