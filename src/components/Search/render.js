import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconClose from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
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
    };
    this.resultsDiv = React.createRef();
    this.loadData = this.loadData.bind(this);
    this.getSearchResult = this.getSearchResult.bind(this);
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

    const results = this.getSearchResult();

    const rows = [];
    if (results && results.length > 0) {
      results.forEach((result) => {
        const html = this.state.query ? fuzzysort.highlight(
          fuzzysort.single(
            this.state.query,
            result.obj.title,
          ),
        ) : result.obj.title;
        rows.push(
          <Link
            to={`/${result.obj.uri}.html`}
            key={result.obj.uri}
            onClick={this.props.handleClose}
          >
            <div dangerouslySetInnerHTML={{__html: html}} className={css.result_row}/>
          </Link>,
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
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 12,
          }}
        >
          <div style={{flex: 1}}>
            <DialogTitle className={css.title}>
              Support site search
            </DialogTitle>
          </div>
          <div style={{margin: '0 12px'}}>
            <DelayedButton iconButton onClick={this.props.handleClose}>
              <IconClose/>
            </DelayedButton>
          </div>
        </div>
        <DialogContent>
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
          <div style={{overflowY: 'scroll', height: 550}} ref={this.resultsDiv}>
            <Typography className={css.results} component={'div'} variant={'h5'}>
              {rows}
            </Typography>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}

export default SearchRender;
