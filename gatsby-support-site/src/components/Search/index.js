import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import css from './style.module.scss';
import Helmet from '../seo';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchor: null,
    };
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
          this.state.open && <StaticQuery
            query={detailsQuery}
            render={(data) => {
              return (
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
                      {JSON.stringify(data)}
                    </div>
                  </Typography>
                </Popover>
              );
            }}
          />
        }
      </>
    );
  }
}

export default Search;

const detailsQuery = graphql`
  {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                uri
                tags
              }
            }
          }
        }
      }
`;
