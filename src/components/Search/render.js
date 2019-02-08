import React from 'react';
import {Link} from 'gatsby';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import css from './style.module.scss';

const fuzzysort = require('fuzzysort');
const ls = require('localstorage-ttl');

class SearchRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: null,
      query: '',
    };
    this.loadData = this.loadData.bind(this);
    this.getSearchResult = this.getSearchResult.bind(this);
  }

  componentWillMount() {
    this.loadData();
  }

  getSearchResult() {
    let results = [];
    if (this.state.allData) {
      results = fuzzysort.go(
        this.state.query,
        this.state.allData,
        {
          key: 'title',
          limit: 25,
        });
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
        const html = fuzzysort.highlight(
          fuzzysort.single(
            this.state.query,
            result.obj.title,
          ),
        );
        rows.push(
          <Link
            to={`/${result.obj.uri}.html`}
            key={result.obj.uri}
          >
            <div dangerouslySetInnerHTML={{__html: html}} className={css.result_row}/>
          </Link>,
        );
      });
    }

    return (
      <>
        <Typography component={'div'}>
          <TextField
            autoFocus
            label="Search"
            placeholder=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => this.setState({query: e.target.value})}
            value={this.state.query}
          />
          <Typography className={css.results} component={'div'} variant={'h5'}>
            {rows}
          </Typography>
        </Typography>
      </>
    );
  }
}

export default SearchRender;
