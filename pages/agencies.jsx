import { Component } from "react";
import { Login, Header } from "../components";
import { Storage } from "../lib";
import { Container, Grid, Card, Paper, Typography } from "@material-ui/core";
import css from '../less';

export default class AgenciesPage extends Component {
  state;
  memory;

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    this.memory = new Storage(window.localStorage);

    const counter = this.memory.get('counter');
    if (counter) {
      this.setState({
        counter: parseInt(counter)
      });
    } else {
      this.memory.put(this.state);
    }
  }

  componentDidUpdate() {
    this.memory.put(this.state);
  }

  render() {
    return (
      <Container>
        <Header title="Agencies" description="Agencies page" />
        <Grid container spacing={2}>
          <Grid item md={8} lg={8} xs={12}>
            <Paper className={css.padded}>
              <Typography variant="h5" component="h3" className={css.headingText}>
                Agencies
              </Typography>
              <Typography component="p">
                <button onClick={() => this.setState({ counter: parseInt(this.state.counter) + 1 })}>Click</button>
                { this.state.counter ? ` clicked ${this.state.counter} times ` : ``} 
                { this.state.counter ? <button onClick={() => this.setState({ counter: 0 })}>Reset</button> : `` }
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