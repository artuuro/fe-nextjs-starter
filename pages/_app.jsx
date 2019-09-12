import App from "next/app";
import { Fragment } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import { Topbar, Footer } from "../components";
import { Theme } from "../lib";

class AgenciesApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <CssBaseline />
        <ThemeProvider theme={ Theme }>
          <Topbar />
          <Component { ...pageProps } />
          <Footer />
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default AgenciesApp;
