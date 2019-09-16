import { Component } from "react";
import Router from "next/router";
import {
  TextField,
  InputAdornment,
  IconButton,
  Button,
  FormControl,
  FormGroup,
  FormLabel
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { connect } from "react-redux";
import { signin } from "../store";

class Login extends Component {
  state;

  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
      loginDisabled: false,
      credentials: {
        username: "",
        password: ""
      }
    };
  }

  doAuthentication(credentials) {
    console.log(`AUTH: ${JSON.stringify(credentials)}`);
    this.props.signin();
    Router.push('/dashboard');
  }

  validateInputs() {
    return this.state.credentials.username == "" || this.state.credentials.password == "";
  }

  render() {
    return (
      <FormGroup>
        <FormLabel>Authentication</FormLabel>
        <FormControl>
          <TextField
            margin="dense"
            variant="outlined"
            type="email"
            label="E-mail"
            onChange={e =>
              this.setState({
                credentials: {
                  ...this.state.credentials,
                  username: e.target.value
                }
              })
            }
          />
        </FormControl>
        <FormControl>
          <TextField
            margin="dense"
            variant="outlined"
            type={this.state.showPassword ? "text" : "password"}
            label="Password"
            onChange={e =>
              this.setState({
                credentials: {
                  ...this.state.credentials,
                  password: e.target.value
                }
              })
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="toggle password visibility"
                    onClick={() =>
                      this.setState({ showPassword: !this.state.showPassword })
                    }
                  >
                    {this.state.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </FormControl>
        <FormControl margin="dense">
          <Button
            disabled={this.validateInputs()}
            size="large"
            variant="contained"
            color="primary"
            onClick={() => this.doAuthentication(this.state.credentials)}
          >
            Login
          </Button>
        </FormControl>
      </FormGroup>
    );
  }
}

const mapDispatchToProps = { signin };

export default connect(
  null,
  mapDispatchToProps
)(Login);
