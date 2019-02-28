import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import SearchRender from './render';

const {blurRemove, blurAdd} = require('../../utils/blur');
const {subscribeToChanges, unsubscribeFromChanges} = require('../../utils/state');

// const ls = require('localstorage-ttl');
const ajaxGet = require('../../utils/ajax/get');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      searchableData: null,
    };
    this.dataPreload = null;
    this.preload = this.preload.bind(this);
  }

  componentDidMount() {
    this.dataPreload = setTimeout(() => {
      this.preload();
    }, 100);

    subscribeToChanges({
      id: 'search_comp', fn: ({type}) => {
        if (type === 'SEARCH_SHOW' && this.state.open === false) {
          this.setState({open: true});
        }
      },
    });
  }

  componentWillUnmount() {
    clearTimeout(this.dataPreload);
    unsubscribeFromChanges({id: 'search_comp'});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.open !== this.state.open) {
      if (this.state.open) {
        blurAdd();
      } else {
        blurRemove();
      }
    }
  }

  async preload() {
    if (this.state.searchableData === null) {
      const rawJSON = await ajaxGet({url: 'https://trafikito.com/support/search.json'});
      try {
        let parsed = JSON.parse(rawJSON);
        // ls.set('searchable-data', rawJSON, (1000 * 60 * 60 * 24));
        this.setState({searchableData: parsed});
      } catch (e) {
        // localStorage.removeItem('searchable-data');
      }
    }
  }

  render() {
    return (
      <>
        <IconButton
          color="inherit"
          aria-label="Search"
          style={{marginLeft: 3}}
          aria-haspopup="true"
          variant="contained"
          onClick={() => this.setState({open: true})}
        >
          <SearchIcon/>
        </IconButton>
        {this.state.open && this.state.searchableData && (
          <SearchRender
            searchableData={this.state.searchableData}
            handleClose={() => {
              this.setState({open: false});
              blurRemove();
            }}
          />
        )}
      </>
    );
  }
}

export default Search;
