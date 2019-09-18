import { TextField } from "@material-ui/core";

export default params => (
    <TextField
        {...params}
        margin="dense"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
    />
);