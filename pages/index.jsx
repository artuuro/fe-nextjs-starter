import { Component } from "react";
import { Container, Grid, Card, Paper, Typography } from "@material-ui/core";
import { Login, Header } from "../components";
import { Storage } from "../lib";
import css from '../less';

class IndexPage extends Component {
  memory;
  state;

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    this.memory = new Storage(window.localStorage);
    this.setState(this.memory.getAll());
  }

  render() {
    return (
      <Container>
        <Header title="Home" description="Home page" />
        <Grid container spacing={2}>
          <Grid item md={8} lg={8} xs={12}>
            <Paper className={css.padded}>
              <Typography variant="h5" component="h3" className={css.headingText}>
                Home
              </Typography>
              <Typography component="p">
                Clicks in memory: { this.state.counter }
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={4} lg={4} xs={12}>
            <Card className={css.padded}>
              <Login />
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default IndexPage;
