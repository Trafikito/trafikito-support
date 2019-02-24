import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Grow from '@material-ui/core/Grow';

import css from './../style.module.scss';

const fuzzysort = require('fuzzysort');

class SearchResultsVideos extends React.Component {

  static propTypes = {
    videos: PropTypes.array.isRequired,
    searchQuery: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
    };
  }

  render() {
    const videos = this.props.videos;
    if (!videos || videos.length === 0) {
      return null;
    }

    const showScrollNext = videos.length > 4 + this.state.offset;
    const showScrollPrevious = this.state.offset > 0;

    const cards = [];
    videos.forEach((video, index) => {
      const titleWithHighlights = this.props.searchQuery ? fuzzysort.highlight(
        fuzzysort.single(
          this.props.searchQuery,
          video.obj.title,
        ),
      ) : video.obj.title;

      cards.push(
        <Grow
          in={index <= this.state.offset + 3}
          key={video.obj.id}
          timeout={{
            enter: (index - this.state.offset) * 500,
          }}
          duration={350}
          delay={350}
        >
          <div style={{margin: 4}}>
            <Card style={{width: 205}}>
              <img src={video.obj.img} alt={video.obj.title} style={{width: 205, height: 115}}/>
              <a href={video.obj.url}>
                <Typography
                  className={css.results_match}
                  variant={'subtitle2'}
                  style={{padding: '16px 16px 0', height: 110}}
                  component={'div'}
                >
                  <div dangerouslySetInnerHTML={{__html: titleWithHighlights}}/>
                </Typography>
              </a>
            </Card>
          </div>
        </Grow>,
      );
    });

    return (
      <div style={{position: 'relative', margin: '28px 0'}}>
        <div
          style={{
            overflow: 'hidden',
            margin: showScrollNext || showScrollPrevious > 0 ? '0 24px 0 24px' : 0,
            transition: 'all 350ms',
          }}
        >
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
          showScrollNext && (
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
          showScrollPrevious && (
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
    );
  }
}

export default SearchResultsVideos;
