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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import SearchResultsVideos from './partials/videos';
import SearchResultsArticles from './partials/articles';

import css from './style.module.scss';
import DelayedButton from '../DelayedButton';

const fuzzysort = require('fuzzysort');

// const ls = require('localstorage-ttl');

class SearchRender extends React.Component {
  static propTypes = {
    handleClose: PropTypes.func.isRequired,
    searchableData: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      allData: null,
      query: '',
      // glossary: [
      //   {
      //     word: 'regex',
      //     uri: 'what-is-a-regex',
      //   },
      //   {
      //     word: 'workspace',
      //     uri: 'what-is-a-workspace',
      //   },
      //   {
      //     word: 'data parsing',
      //     uri: 'what-is-data-parsing',
      //   },
      //   {
      //     word: 'action body',
      //     uri: 'what-is-an-action-body',
      //   },
      //   {
      //     word: 'email template',
      //     uri: 'what-is-email-templates',
      //   },
      //   {
      //     word: 'notification url',
      //     uri: 'what-is-a-notification-url',
      //   },
      //   {
      //     word: 'notification name',
      //     uri: 'what-is-a-notification-name',
      //   },
      //   {
      //     word: 'dashboard',
      //     uri: 'what-is-trafikito-s-dashboard',
      //   },
      //   {
      //     word: 'action method',
      //     uri: 'what-is-a-notification-action-method',
      //   },
      //   {
      //     word: 'display type',
      //     uri: 'what-is-the-display-type-for-the-variable',
      //   },
      //   {
      //     word: 'HTML vs RAW',
      //     uri: 'what-is-the-difference-between-html-and-raw-body',
      //   },
      //   {
      //     word: 'data splitting',
      //     uri: 'what-is-data-splitting-inside-data-source-configuration',
      //   },
      //   {
      //     word: 'action type',
      //     uri: 'what-is-the-difference-between-action-types-getting-data-not-getting-data-and-variable-in-ranges',
      //   },
      //   {
      //     word: 'variable',
      //     uri: 'what-are-variables',
      //   },
      //   {
      //     word: 'notification',
      //     uri: 'what-are-notifications',
      //   },
      //   {
      //     word: 'API call header',
      //     uri: 'what-are-api-call-headers',
      //   },
      //   {
      //     word: 'variable range',
      //     uri: 'what-are-warning-and-error-ranges',
      //   },
      // ],
      videos: [
        // {
        //   id: 'video_1',
        //   url: 'https://www.youtube.com/watch?v=Bey4XXJAqS8',
        //   title: '4K VIDEO ultrahd hdr sony 4K VIDEOS demo test nature relaxation movie for 4k oled tv',
        //   img: 'https://i.ytimg.com/vi/Bey4XXJAqS8/hqdefault.jpg',
        // },
        // {
        //   id: 'video_2',
        //   url: 'https://www.youtube.com/watch?v=y__1BRp4_88',
        //   title: 'The Police - Every Breath You Take (Deep Chills Remix)',
        //   img: 'https://i.ytimg.com/vi/y__1BRp4_88/hqdefault.jpg',
        // },
        // {
        //   id: 'video_3',
        //   url: 'https://www.youtube.com/watch?v=dbZMmu8v-D8',
        //   title: 'Kygo - Piano Jam (ALL 1-2-3) [1 HOUR]',
        //   img: 'https://i.ytimg.com/vi/dbZMmu8v/hqdefault.jpg',
        // },
        // {
        //   id: 'video_4',
        //   url: 'https://www.youtube.com/watch?v=sPBVzqOax3Y',
        //   title: 'Solomun - Somebody\'s Story (Original Mix)',
        //   img: 'https://i.ytimg.com/vi/sPBVzqOax3Y/hqdefault.jpg',
        // },
        // {
        //   id: 'video_5',
        //   url: 'https://www.youtube.com/watch?v=AbWBviQCMEE',
        //   title: 'Phil Collins - In The Air Tonight (Panski & John Skyfield Remix) [Deep House]',
        //   img: 'https://i.ytimg.com/vi/AbWBviQCMEE/hqdefault.jpg',
        // },
      ],
    };
    this.inputRef = React.createRef();
    this.loadData = this.loadData.bind(this);
    this.getSearchResult = this.getSearchResult.bind(this);
    // this.getSearchResultGlossary = this.getSearchResultGlossary.bind(this);
    this.getSearchResultVideos = this.getSearchResultVideos.bind(this);
  }

  componentWillMount() {
    this.loadData();
  }

  getSearchResult() {
    const limit = 100;
    let results = [];
    if (this.state.allData) {
      if (this.state.query) {
        results = fuzzysort.go(
          this.state.query,
          this.state.allData,
          {
            key: 'title',
            limit,
          });
      } else {
        this.state.allData.forEach((item) => {
          if (results.length <= limit) {
            results.push({obj: item});
          }
        });
      }
    }
    return results;
  }

  // getSearchResultGlossary() {
  //   const limit = 1000;
  //   let results = [];
  //   if (this.state.glossary) {
  //     if (this.state.query) {
  //       results = fuzzysort.go(
  //         this.state.query,
  //         this.state.glossary,
  //         {
  //           key: 'word',
  //           limit,
  //         });
  //     } else {
  //       this.state.glossary.forEach((item) => {
  //         if (results.length <= limit) {
  //           results.push({obj: item});
  //         }
  //       });
  //     }
  //   }
  //   return results;
  // }

  getSearchResultVideos() {
    const limit = 1000;
    let results = [];
    if (this.state.videos) {
      if (this.state.query) {
        results = fuzzysort.go(
          this.state.query,
          this.state.videos,
          {
            key: 'title',
            limit,
          });
      } else {
        this.state.videos.forEach((item) => {
          if (results.length <= limit) {
            results.push({obj: item});
          }
        });
      }
    }
    return results;
  }

  loadData() {
    // const rawJSON = ls.get('searchable-data');
    //
    // let allData = null;
    // try {
    //   allData = JSON.parse(rawJSON);
    // } catch (e) {
    //   localStorage.removeItem('searchable-data');
    //   console.error(`#jlekjwkf Search failed because searchable data is invalid JSON.`);
    // }
    this.setState({allData: this.props.searchableData});
  }

  render() {
    if (!this.state.allData) {
      console.log(`#kjrlkejge searchable JSON must be ready before rendering search results.`);
      return null;
    }

    const resultsArticles = this.getSearchResult();
    // const resultsGlossary = this.getSearchResultGlossary();
    const resultsVideos = this.getSearchResultVideos();

    return (
      <Dialog
        open={true}
        disableBackdropClick
        PaperProps={{style: {margin: '6px 3px'}}}
        maxWidth={'md'}
        fullWidth
        onKeyDown={(e) => {
          if (this.inputRef && this.inputRef.current && e.key.length === 1 && /[a-z0-9]/i.test(e.key)) {
            this.inputRef.current.focus();
          }
        }}
      >
        <DialogContent>
          <div
            style={{
              display: 'flex',
              margin: '0 0 24px 0',
              alignItems: 'center',
            }}
          >
            <TextField
              autoFocus
              label="Search"
              placeholder=""
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                this.setState({query: e.target.value});
              }}
              value={this.state.query}
              inputRef={this.inputRef}
            />
            <DelayedButton iconButton onClick={this.props.handleClose} style={{margin: '0 6px 0 12px'}}>
              <IconClose/>
            </DelayedButton>
          </div>
          <SearchResultsVideos videos={resultsVideos} searchQuery={this.state.query}/>
          <SearchResultsArticles articles={resultsArticles} searchQuery={this.state.query}/>
        </DialogContent>
      </Dialog>
    );
  }
}

export default SearchRender;
