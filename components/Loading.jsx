import { Grid, CircularProgress } from "@material-ui/core";
import css from "../less";

export default () => {
    return (
        <Grid className={css.loading} container align="center" justify="center" direction="column">
            <Grid item>
                <CircularProgress color="primary" />
            </Grid>
        </Grid>
    );
}