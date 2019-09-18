import { Component } from "react";
import { Navigation, UserMenu } from "./";
import Link from "next/link";
import css from "../less";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import { connect } from "react-redux";

class Topbar extends Component {
  static getInitialProps({ store }) {

    return {
      ...store.getState()
    };
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
                this.props.isAuthenticated
                ? <UserMenu />
                : <Navigation links={[
                  { url: 'agencies', as: 'Agencies' },
                  { url: 'signup', as: 'Create Account' }
                ]}/>
              }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(
  mapStateToProps,
  null
)(Topbar);
