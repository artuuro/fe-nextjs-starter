import { Component } from "react";
import { Navigation } from '.';
import Link from 'next/link';
import css from '../less';
import { AppBar, Toolbar, Grid } from '@material-ui/core';

class Topbar extends Component {
  props;
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar color="inherit" className={css.appBar}>
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              <Link href="/">
                <a>
                  <img src="/static/logo.png" alt="logo" className={css.logo} />
                </a>
              </Link>
            </Grid>
            <Grid item className={css.navigation}>
              <Navigation links={[
                { url: 'agencies', as: 'Agencies' }, 
                { url: 'signup', as: 'Sign-up' }
              ]}/>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Topbar;
