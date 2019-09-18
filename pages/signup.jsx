import { Component, Fragment } from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { Header, Registration } from "../components";
import css from "../less";

class SignupPage extends Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Header title="Create account" description="Signup page" />
        <Grid container>
          <Grid item xs={12}>
            <Paper className={css.padded}>
              <Registration />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default SignupPage;
