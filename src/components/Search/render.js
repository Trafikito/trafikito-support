import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import IconClose from '@material-ui/icons/Close';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';

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
      scrolled: false,
      scrolledDom: null, // DOM element which was scrolled
      query: '',
      videos: [],
    };
    this.inputRef = React.createRef();
    this.loadData = this.loadData.bind(this);
    this.resetScroll = this.resetScroll.bind(this);
    this.getSearchResult = this.getSearchResult.bind(this);
    this.getSearchResultVideos = this.getSearchResultVideos.bind(this);
  }

  componentWillMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.state.query !== prevState.query
      || this.state.scrolled !== prevState.scrolled
    ) {
      this.resetScroll();
    }
  }

  resetScroll() {
    if (this.state.scrolledDom) {
      this.state.scrolledDom.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
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
        PaperProps={{style: {margin: '6px 3px'}}}
        maxWidth={'md'}
        fullWidth
        onKeyDown={(e) => {
          if (this.inputRef && this.inputRef.current && e.key.length === 1 && /[a-z0-9]/i.test(e.key)) {
            this.inputRef.current.focus();
          }
        }}
        onKeyUp={(e) => {
          if (e.key === 'Escape') {
            this.props.handleClose();
          }
          this.resetScroll();
        }}
      >
        <div
          style={{
            top: 1,
            display: 'flex',
            padding: '48px 12px 48px 24px',
            margin: 0,
            alignItems: 'center',
            boxShadow: this.state.scrolled ? '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' : '',
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
              this.setState({query: e.target.value, scrolled: false});
            }}
            onKeyUp={() => this.resetScroll()}
            value={this.state.query}
            inputRef={this.inputRef}
          />
          <DelayedButton iconButton onClick={this.props.handleClose} style={{margin: '0 6px 0 12px'}}>
            <IconClose/>
          </DelayedButton>
        </div>
        <DialogContent
          onScroll={(e) => {
            const topOffset = e.currentTarget.getBoundingClientRect().top;
            const scrollOffset = e.currentTarget.firstChild.getBoundingClientRect().top;
            if (scrollOffset < topOffset && this.state.scrolled === false) {
              this.setState({scrolled: true, scrolledDom: e.currentTarget});
            } else if (scrollOffset > topOffset && this.state.scrolled === true) {
              this.setState({scrolled: false, scrolledDom: e.currentTarget});
            } else {
              this.setState({scrolledDom: e.currentTarget});
            }
          }}
        >
          <div id={'bar'}>
            <SearchResultsVideos videos={resultsVideos} searchQuery={this.state.query}/>
            <SearchResultsArticles articles={resultsArticles} searchQuery={this.state.query}/>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}

export default SearchRender;
