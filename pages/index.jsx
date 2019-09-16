import { Component } from "react";
import { Container, Grid, Card, Paper, Typography } from "@material-ui/core";
import { Login, Header } from "../components";
import css from "../less";
import { connect } from "react-redux";
import { tickClock, serverRenderClock } from "../store";

class IndexPage extends Component {

  static getInitialProps({ store }) {
    store.dispatch(serverRenderClock());
    return {
      ...store.getState()
    };
  }

  componentDidMount () {
    this.timer = setInterval(() => this.props.tickClock(), 1000);
    console.log(this.props);
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  getGridSize() {
    return this.props.isAuthenticated ? 12 : 8;
  }

  time() {
    return new Date(this.props.time).toJSON().slice(11, 19);
  }

  render() {
    return (
      <Container>
        <Header title="Home" description="Home page" />
        
        <Grid container spacing={2}>
          <Grid item md={ this.getGridSize() } lg={ this.getGridSize() } xs={12}>
            <Paper className={css.padded}>
              <Typography variant="h5" component="h3" className={css.headingText}>
                Home
              </Typography>
              <Typography variant="body1">
                { this.time() }
              </Typography>
            </Paper>
          </Grid>

          {!this.props.isAuthenticated && <Grid item md={4} lg={4} xs={12}>
            <Card className={css.padded}>
              <Login />
            </Card>
          </Grid>}

        </Grid>

      </Container>
    );
  }
}

const mapStateToProps = state => ({
  time: state.time,
  isAuthenticated: state.isAuthenticated
});

const mapDispatchToProps = { tickClock };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);
