import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {Link} from 'gatsby';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import css from './../style.module.scss';

const {blurRemove} = require('../../../utils/blur');
const {fireEvent} = require('../../../utils/state');
const fuzzysort = require('fuzzysort');
const removeMd = require('remove-markdown');

class SearchResultsArticles extends React.Component {

  static propTypes = {
    variant: PropTypes.oneOf(['compact']),
    articles: PropTypes.array.isRequired,
    searchQuery: PropTypes.string,
    showOpenSearchButton: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.searchQuery !== this.props.searchQuery && this.state.page !== 1) {
      this.setState({page: 1});
    }
  }

  render() {
    const articles = this.props.articles;
    const rows = [];
    const perPage = 15;
    let thereAreMore = 0;
    let bottom = null;

    if (articles && articles.length > 0) {
      articles.forEach((article, index) => {
        article = article.obj || article;
        if (index >= this.state.page * perPage) {
          thereAreMore++;
          return;
        }
        const titleWithHighlights = this.props.searchQuery ? fuzzysort.highlight(
          fuzzysort.single(
            this.props.searchQuery,
            article.title,
          ),
        ) : article.title;

        const enter = (index + 1 - (this.state.page - 1) * perPage) * 350;

        rows.push(
          <Grow
            in={index < this.state.page * perPage}
            key={article.id}
            timeout={{
              enter: enter > 1500 ? 1500 : enter,
            }}
            duration={350}
            delay={350}
          >
            <div style={{marginBottom: 28}}>
              <Link
                onClick={() => blurRemove()}
                style={{margin: '4px 0', display: 'block', cursor: 'pointer'}} to={`/${article.uri}.html`}
              >
                <Typography
                  style={{color: 'inherit', fontSize: 17}}
                  className={css.results_match}
                  variant={'h5'}
                  component={'div'}
                >
                  <div dangerouslySetInnerHTML={{__html: titleWithHighlights}}/>
                </Typography>
              </Link>
              <Typography variant={'caption'}>
                {removeMd(article.excerpt)}
              </Typography>
            </div>
          </Grow>,
        );
      });

      if (thereAreMore > 0) {
        bottom = (
          <div>
            <Typography component={'div'} style={{textAlign: 'center', margin: '24px 24px 6px'}}>
              Showing {this.state.page * perPage} of {articles.length}
            </Typography>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Button
                variant={'contained'}
                color={'primary'}
                onClick={() => this.setState({page: this.state.page + 1})}
              >
                Load more
              </Button>
            </div>
          </div>
        );
      } else {
        bottom = (
          <Typography component={'div'} style={{textAlign: 'center', margin: '24px 24px 6px'}}>
            Showing {articles.length} of {articles.length}
          </Typography>
        );
      }
    } else {
      bottom = (
        <Typography component={'div'} style={{textAlign: 'center', margin: '24px 24px 6px'}}>
          No results. Try different query.
        </Typography>
      );
    }

    return (
      <div>
        {rows}
        {bottom}
        {
          this.props.showOpenSearchButton && thereAreMore === 0 ? (
            <div style={{textAlign: 'center'}}>
              <Button
                variant={'contained'}
                color={'primary'}
                onClick={() => fireEvent({type: 'SEARCH_SHOW'})}
              >
                Open search
              </Button>
            </div>
          ) : null
        }
      </div>
    );
  }
}

export default SearchResultsArticles;
