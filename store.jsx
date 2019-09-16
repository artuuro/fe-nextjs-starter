import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const defaultState = {
    time: 0,
    isAuthenticated: false
};

export const actionTypes = {
    TICK: 'TICK',
    AUTH: 'AUTH'
};

// REDUCERS
export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.TICK:
            return Object.assign({}, state, {
                time: action.stamp
            });
        case actionTypes.AUTH:
            return Object.assign({}, state, {
                isAuthenticated: action.authenticated
            });
        default:
            return state;
    }
};

// ACTIONS
export const serverRenderClock = () => {
    return { type: actionTypes.TICK, stamp: Date.now() };
}

export const tickClock = () => {
    return { type: actionTypes.TICK, stamp: Date.now() };
}

export const signin = () => {
    return { type: actionTypes.AUTH, authenticated: true };
}

export const signout = () => {
    return { type: actionTypes.AUTH, authenticated: false };
}

const persistedReducer = persistReducer({
    key: 'primary',
    storage,
    whiteList: ['isAuthenticated']
}, reducer);

export function initializeStore(initialState = defaultState) {
    return createStore(
        persistedReducer,
        initialState,
        composeWithDevTools(applyMiddleware())
    );
};