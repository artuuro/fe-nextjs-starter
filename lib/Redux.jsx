import { Component } from "react";
import { initializeStore } from "../store";
import { Config } from "./";

const isServer = typeof window === 'undefined';
const STORAGE_NAME = `${Config.title}_STORAGE`;

function getOrCreateStore(initialState) {
    if (isServer) {
        return initializeStore(initialState);
    }

    if (!window[STORAGE_NAME]) {
        window[STORAGE_NAME] = initializeStore(initialState);
    }
    return window[STORAGE_NAME];
}

export default App => {
    return class AppWithRedux extends Component {
        static async getInitialProps(appContext) {
            const store = getOrCreateStore();
            appContext.ctx.store = store;

            let appProps = {}
            if (typeof App.getInitialProps === 'function') {
                appProps = await App.getInitialProps(appContext);
            }

            return {
                ...appProps,
                initialReduxState: store.getState()
            };
        }

        constructor(props) {
            super(props);
            this.store = getOrCreateStore(props.initialReduxState);
        }

        render() {
            return <App {...this.props} store={this.store} />;
        }
    };
};