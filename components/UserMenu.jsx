import { Component, Fragment } from "react";
import { IconButton, Badge } from "@material-ui/core";
import { Mail, AccountCircle } from '@material-ui/icons';
import { Navigation } from "./";

class UserMenu extends Component {

  render() {
    return (
      <Fragment>
        <Navigation links={[
          {
            url: '#',
            as:
            <IconButton aria-label="show 4 messages" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <Mail />
              </Badge>
            </IconButton>
          },
          {
            url: '#',
            as:
            <IconButton aria-label="my account" color="inherit">
              <AccountCircle />
            </IconButton>
          }
        ]}/>
      </Fragment>
    );
  }
}

export default UserMenu;
