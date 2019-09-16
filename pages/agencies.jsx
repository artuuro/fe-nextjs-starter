import { Component } from "react";
import { Login, Header } from "../components";
import { Container, Grid, Card, Paper, Typography } from "@material-ui/core";
import css from "../less";

export default class AgenciesPage extends Component {
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
