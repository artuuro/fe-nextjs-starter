import { Component } from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { Header, Registration } from "../components";
import css from "../less";


class SignupPage extends Component {
  render() {
    return (
      <Container>
        <Header title="Registration" description="Signup page" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper className={css.padded}>
              <Typography variant="h5" component="h3" className={css.headingText}>
                Sign-up
              </Typography>
              <Registration />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default SignupPage;
