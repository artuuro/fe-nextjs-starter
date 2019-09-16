import App from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import { Topbar, Footer, Loading } from "../components";
import { Theme, withRedux } from "../lib";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

class AgenciesApp extends App {
  constructor(props) {
    super(props);
    this.persistor = persistStore(props.store);
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <CssBaseline />
        <ThemeProvider theme={Theme}>
          <PersistGate loading={<Loading />} persistor={this.persistor} >
            <Topbar />
            <Component {...pageProps} />
            <Footer />
          </PersistGate>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withRedux(AgenciesApp);
