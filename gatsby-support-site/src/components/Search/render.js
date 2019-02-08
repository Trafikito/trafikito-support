import React from 'react';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import css from './style.module.scss';

const ls = require('localstorage-ttl');
const ajaxGet = require('../../utils/ajax/get');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchor: null,
      searchableData: null,
    };
    this.dataPreload = null;
    this.preload = this.preload.bind(this);
  }

  componentDidMount() {
    const searchableData = ls.get('searchable-data');
    if (searchableData) {
      try {
        let json = JSON.parse(searchableData);
        if (json) {
          this.setState({searchableData: json});
        }
      } catch (e) {
        // it was an invalid json.
      }
    }

    this.dataPreload = setTimeout(() => {
      this.preload();
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.dataPreload);
  }

  async preload() {
    if (this.state.searchableData === null) {
      const searchableData = await ajaxGet({url: 'https://raw.githubusercontent.com/Trafikito/support/master/gatsby-support-site/search.json'});
      ls.set('searchable-data', searchableData, (1000 * 60 * 60 * 30));
      this.setState({searchableData: JSON.parse(searchableData)});
    }
  }

  render() {
    return (
      <>
        <IconButton
          color="inherit"
          aria-label="Search"
          style={{marginLeft: 3}}
          aria-owns={this.state.open ? 'search-popover' : undefined}
          aria-haspopup="true"
          variant="contained"
          onClick={(event) => this.setState({anchor: event.currentTarget, open: true})}
        >
          <SearchIcon/>
        </IconButton>
        {
          this.state.open && (
            <Popover
              id="search-popover"
              open={this.state.open}
              anchorEl={this.state.anchor}
              onClose={(event) => this.setState({anchor: null, open: false})}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              classes={{
                paper: css.popover,
              }}
            >
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
                />
                <div>
                  {JSON.stringify(this.state.searchableData)}
                </div>
              </Typography>
            </Popover>
          )
        }
      </>
    );
  }
}

export default Search;
