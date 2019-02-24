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
import Fab from '@material-ui/core/Fab';
import blueGrey from '@material-ui/core/colors/blueGrey';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import Grow from '@material-ui/core/Grow';

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
      offset: 0,
    };
  }

  render() {
    const articles = this.props.articles;
    if (!articles || articles.length === 0) {
      return null;
    }

    const rows = [];
    articles.forEach((article, index) => {
      const titleWithHighlights = this.props.searchQuery ? fuzzysort.highlight(
        fuzzysort.single(
          this.props.searchQuery,
          article.obj.title,
        ),
      ) : article.obj.title;

      rows.push(
        <Grow
          in={index <= this.state.offset + 3}
          key={article.obj.id}
          timeout={{
            enter: index * 350,
          }}
          duration={350}
          delay={350}
        >
          <div>
            <a style={{margin: 4, display: 'block'}}>
              <Typography className={css.results_match} variant={'h5'} component={'div'}>
                <div dangerouslySetInnerHTML={{__html: titleWithHighlights}}/>
              </Typography>
            </a>
            <Typography variant={'body2'}>
              {article.obj.excerpt}
            </Typography>
            {JSON.stringify(article)}
          </div>
        </Grow>,
      );
    });

    return (
      <div>
        {rows}
      </div>
    );
  }
}

export default SearchResultsArticles;
