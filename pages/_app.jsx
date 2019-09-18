import App from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, Toolbar, Container } from "@material-ui/core";
import { Topbar, Loading, Footer } from "../components";
import { Theme, withRedux } from "../lib";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import css from "../less";

class AgenciesApp extends App {
  constructor(props) {
    super(props);
    this.persistentStorage = persistStore(props.store);
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <CssBaseline />
        <ThemeProvider theme={Theme}>
          <PersistGate loading={<Loading />} persistor={this.persistentStorage} >
            <Topbar />
            <Toolbar />
            <Container className={css.mainContainer} maxWidth={false}>
              <Component {...pageProps} />
            </Container>
            <Footer />
          </PersistGate>
        </ThemeProvider>
      </Provider>
    );
  }
}
export default withRedux(AgenciesApp);
