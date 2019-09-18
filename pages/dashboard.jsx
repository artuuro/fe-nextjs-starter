import { Component } from "react";
import { withAuth } from "../lib";
import css from "../less";

class DashboardPage extends Component {


  render() {
    return (
      <div className={css.test}>
        DASHBOARD
      </div>
    );
  }
}

export default withAuth(DashboardPage);
