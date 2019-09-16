import { Component, Fragment } from "react";
import { IconButton, Badge } from "@material-ui/core";
import { Mail, AccountCircle, Dashboard, ExitToApp } from '@material-ui/icons';
import { Navigation } from "./";
import { connect } from "react-redux";
import { signout } from "../store";

class UserMenu extends Component {
  render() {
    return (
      <Fragment>
        <Navigation links={[
          {
            url: 'dashboard',
            as:
            <IconButton aria-label="dashboard" color="inherit">
              <Dashboard />
            </IconButton>
          },
          {
            url: '#TODO_MESSAGES',
            as:
            <IconButton aria-label="messages" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <Mail />
              </Badge>
            </IconButton>
          },
          {
            url: '#TODO_ACCOUNT',
            as:
            <IconButton aria-label="account" color="inherit">
              <AccountCircle />
            </IconButton>
          },
          { 
            url: '/',
            as:
            <IconButton onClick={() => this.props.signout()} aria-label="logout" color="inherit">
              <ExitToApp />
            </IconButton>
          }
        ]}/>
      </Fragment>
    );
  }
}

const mapDispatchToProps = { signout };

export default connect(
  null,
  mapDispatchToProps
)(UserMenu);
