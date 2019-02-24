import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {withPrefix} from 'gatsby';

import Grow from '@material-ui/core/Grow';
import Button from '@material-ui/core/Button';

import css from './../style.module.scss';

const fuzzysort = require('fuzzysort');

class SearchResultsArticles extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
    searchQuery: PropTypes.string,
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
    if (!articles || articles.length === 0) {
      return null;
    }

    const rows = [];
    const perPage = 15;
    let thereAreMore = 0;

    articles.forEach((article, index) => {
      if (index >= this.state.page * perPage) {
        thereAreMore++;
        return;
      }
      const titleWithHighlights = this.props.searchQuery ? fuzzysort.highlight(
        fuzzysort.single(
          this.props.searchQuery,
          article.obj.title,
        ),
      ) : article.obj.title;

      const enter = (index + 1 - (this.state.page - 1) * perPage) * 350;

      rows.push(
        <Grow
          in={index < this.state.page * perPage}
          key={article.obj.id}
          timeout={{
            enter: enter > 1500 ? 1500 : enter,
          }}
          duration={350}
          delay={350}
        >
          <div style={{marginBottom: 28}}>
            <a style={{margin: 4, display: 'block', cursor: 'pointer'}} href={`${withPrefix(article.obj.uri)}.html`}>
              <Typography style={{color: 'inherit'}} className={css.results_match} variant={'h5'} component={'div'}>
                <div dangerouslySetInnerHTML={{__html: titleWithHighlights}}/>
              </Typography>
            </a>
            <Typography variant={'body2'}>
              {article.obj.excerpt}
            </Typography>
          </div>
        </Grow>,
      );
    });

    let bottom = null;

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
    return (
      <div>
        {rows}
        {bottom}
      </div>
    );
  }
}

export default SearchResultsArticles;
