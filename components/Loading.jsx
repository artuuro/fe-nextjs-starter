import { Grid, CircularProgress } from "@material-ui/core";

export default () => {
    return (
        <Grid container spacing={0} align="center" justify="center" direction="column">
            <Grid item>
                <CircularProgress color="primary" />
            </Grid>
        </Grid>
    );
}