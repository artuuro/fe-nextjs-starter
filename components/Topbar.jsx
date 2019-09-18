import { Component } from "react";
import PropTypes from "prop-types";
import { Navigation, UserMenu } from "./";
import Link from "next/link";
import css from "../less";
import { AppBar, Toolbar, Grid, useScrollTrigger } from "@material-ui/core";
import { connect } from "react-redux";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};

class Topbar extends Component {
  static getInitialProps({ store }) {

    return {
      ...store.getState()
    };
  }

  render() {
    return (
      <ElevationScroll {...this.props}>
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
                    ]} />
                }
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
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
