import React from 'react';
import TopMenu from './partials/TopMenu';
import css from './style.module.scss';

class Layout extends React.Component {
  render() {
    return (
      <div className={css.main_holder}>
        <TopMenu/>
        <div className={css.content_holder}>
          <div style={{padding: 6}}>
            <main>{this.props.children}</main>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
