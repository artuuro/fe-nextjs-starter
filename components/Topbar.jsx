import { Component } from "react";
import { Navigation, UserMenu } from "./";
import Link from "next/link";
import css from "../less";
import { Memory } from "../lib";
import { AppBar, Toolbar, Grid } from "@material-ui/core";

class Topbar extends Component {
  state;
  memory;
  helpers;


  constructor(props) {
    super(props);
    this.state = {
      authenticated: true,
      user: {}
    };
  }

  componentDidMount() {
    //this.memory = new Memory(window.localStorage);
    //this.helpers = new Helpers(this.memory);
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
              {
                this.state.authenticated
                ? <UserMenu />
                : <Navigation links={[
                  { url: 'agencies', as: 'Agencies' },
                  { url: 'signup', as: 'Registration' }
                ]}/>
              }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Topbar;
