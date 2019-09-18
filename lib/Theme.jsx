import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: '#4e9b47'
    }
  },
  overrides: {
    MuiDivider: {
      root: {
        margin: '10px 0'
      }
    }
  }
});
