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

import css from './style.module.scss';
import DelayedButton from '../DelayedButton';

const fuzzysort = require('fuzzysort');
const ls = require('localstorage-ttl');

class SearchRender extends React.Component {
  static propTypes = {
    handleClose: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      allData: null,
      query: '',
      glossary: [
        {
          word: 'regex',
          uri: 'what-is-a-regex',
        },
        {
          word: 'workspace',
          uri: 'what-is-a-workspace',
        },
        {
          word: 'data parsing',
          uri: 'what-is-data-parsing',
        },
        {
          word: 'action body',
          uri: 'what-is-an-action-body',
        },
        {
          word: 'email template',
          uri: 'what-is-email-templates',
        },
        {
          word: 'notification url',
          uri: 'what-is-a-notification-url',
        },
        {
          word: 'notification name',
          uri: 'what-is-a-notification-name',
        },
        {
          word: 'dashboard',
          uri: 'what-is-trafikito-s-dashboard',
        },
        {
          word: 'action method',
          uri: 'what-is-a-notification-action-method',
        },
        {
          word: 'display type',
          uri: 'what-is-the-display-type-for-the-variable',
        },
        {
          word: 'HTML vs RAW',
          uri: 'what-is-the-difference-between-html-and-raw-body',
        },
        {
          word: 'data splitting',
          uri: 'what-is-data-splitting-inside-data-source-configuration',
        },
        {
          word: 'action type',
          uri: 'what-is-the-difference-between-action-types-getting-data-not-getting-data-and-variable-in-ranges',
        },
        {
          word: 'variable',
          uri: 'what-are-variables',
        },
        {
          word: 'notification',
          uri: 'what-are-notifications',
        },
        {
          word: 'API call header',
          uri: 'what-are-api-call-headers',
        },
        {
          word: 'variable range',
          uri: 'what-are-warning-and-error-ranges',
        },
      ],
      videos: [
        {
          id: 'video_1',
          url: 'https://www.youtube.com/watch?v=Bey4XXJAqS8',
          title: '4K VIDEO ultrahd hdr sony 4K VIDEOS demo test nature relaxation movie for 4k oled tv',
          img: 'https://i.ytimg.com/vi/Bey4XXJAqS8/hqdefault.jpg',
        },
        {
          id: 'video_2',
          url: 'https://www.youtube.com/watch?v=y__1BRp4_88',
          title: 'The Police - Every Breath You Take (Deep Chills Remix)',
          img: 'https://i.ytimg.com/vi/y__1BRp4_88/hqdefault.jpg',
        },
        {
          id: 'video_3',
          url: 'https://www.youtube.com/watch?v=dbZMmu8v-D8',
          title: 'Kygo - Piano Jam (ALL 1-2-3) [1 HOUR]',
          img: 'https://i.ytimg.com/vi/dbZMmu8v/hqdefault.jpg',
        },
        {
          id: 'video_4',
          url: 'https://www.youtube.com/watch?v=sPBVzqOax3Y',
          title: 'Solomun - Somebody\'s Story (Original Mix)',
          img: 'https://i.ytimg.com/vi/sPBVzqOax3Y/hqdefault.jpg',
        },
        {
          id: 'video_5',
          url: 'https://www.youtube.com/watch?v=AbWBviQCMEE',
          title: 'Phil Collins - In The Air Tonight (Panski & John Skyfield Remix) [Deep House]',
          img: 'https://i.ytimg.com/vi/AbWBviQCMEE/hqdefault.jpg',
        },
      ],
    };
    this.resultsDiv = React.createRef();
    this.loadData = this.loadData.bind(this);
    this.getSearchResult = this.getSearchResult.bind(this);
    this.getSearchResultGlossary = this.getSearchResultGlossary.bind(this);
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

  getSearchResultGlossary() {
    const limit = 1000;
    let results = [];
    if (this.state.glossary) {
      if (this.state.query) {
        results = fuzzysort.go(
          this.state.query,
          this.state.glossary,
          {
            key: 'word',
            limit,
          });
      } else {
        this.state.glossary.forEach((item) => {
          if (results.length <= limit) {
            results.push({obj: item});
          }
        });
      }
    }
    return results;
  }

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
    const rawJSON = ls.get('searchable-data');

    let allData = null;
    try {
      allData = JSON.parse(rawJSON);
    } catch (e) {
      localStorage.removeItem('searchable-data');
      console.error(`#jlekjwkf Search failed because searchable data is invalid JSON.`);
    }
    this.setState({allData});
  }

  render() {
    if (!this.state.allData) {
      console.log(`#kjrlkejge searchable JSON must be ready at local storage before rendering search results.`);
      return null;
    }

    const resultsArticles = this.getSearchResult();
    const resultsGlossary = this.getSearchResultGlossary();
    const resultsVideos = this.getSearchResultVideos();

    const rows = [];
    if (resultsArticles && resultsArticles.length > 0) {
      resultsArticles.forEach((result) => {
        const html = this.state.query ? fuzzysort.highlight(
          fuzzysort.single(
            this.state.query,
            result.obj.title,
          ),
        ) : result.obj.title;
        rows.push(
          <Link
            to={`/${result.obj.uri}.html`}
            key={`article_${result.obj.uri}`}
            onClick={this.props.handleClose}
          >
            <div dangerouslySetInnerHTML={{__html: html}} className={css.result_row}/>
          </Link>,
        );
      });
    }

    const glossary = [];
    if (resultsGlossary && resultsGlossary.length > 0) {
      resultsGlossary.forEach((result) => {
        const html = this.state.query ? fuzzysort.highlight(
          fuzzysort.single(
            this.state.query,
            result.obj.word,
          ),
        ) : result.obj.word;
        glossary.push(
          <div key={`gloss_${result.obj.uri}`}>
            <Link
              to={`/${result.obj.uri}.html`}
              onClick={this.props.handleClose}
            >
              <Typography component={'div'} inline variant={'caption'}>
                <div className={css.result_row_glossary} dangerouslySetInnerHTML={{__html: html}}/>
              </Typography>
            </Link>
          </div>,
        );
      });
    }

    return (
      <Dialog
        open={true}
        disableBackdropClick
        PaperProps={{style: {margin: '6px 3px'}}}
        maxWidth={'md'}
        fullWidth
      >
        <div
          style={{
            display: 'flex',
            margin: '24px 6px 24px 24px',
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
              if (this.resultsDiv) {
                this.resultsDiv.current.scrollTop = 0;
              }
            }}
            value={this.state.query}
          />
          <DelayedButton iconButton onClick={this.props.handleClose} style={{margin: '0 6px 0 12px'}}>
            <IconClose/>
          </DelayedButton>
        </div>
        <DialogContent>
          <SearchResultsVideos videos={resultsVideos} searchQuery={this.state.query}/>

          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <div style={{flex: 5, minWidth: 400}}>
              <Card style={{padding: 12, margin: 6, height: 500, overflowY: 'scroll'}}>
                <div ref={this.resultsDiv}>
                  <Typography className={css.results_match} component={'div'} variant={'h5'}>
                    <div>
                      {
                        rows.length > 0 ? rows :
                          <Typography variant={'caption'}>No articles found</Typography>
                      }
                    </div>
                  </Typography>
                </div>
              </Card>
            </div>

            <div style={{overflowY: 'scroll', height: 550, flex: 2, minWidth: 200}}>
              <Card style={{padding: 6, margin: 6}}>
                <div>
                  <div
                    className={css.results_match}
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      textAlign: 'left',
                      minHeight: 64,
                    }}
                  >
                    {
                      glossary.length > 0 ? glossary :
                        <Typography variant={'caption'} style={{width: '100%', margin: 6}}>
                          No keywords found
                        </Typography>
                    }
                  </div>
                </div>
              </Card>
              <Typography variant={'h6'} style={{textAlign: 'center', margin: '12px 0'}}>Recent</Typography>
              <Card style={{padding: 6, margin: 6, minHeight: 64}}>
                {
                  videos.length > 0 ? videos :
                    <Typography variant={'caption'} style={{margin: 6}}>No recent items found</Typography>
                }
              </Card>
            </div>

          </div>
        </DialogContent>
      </Dialog>
    );
  }
}

export default SearchRender;
