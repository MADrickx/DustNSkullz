import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {store, persistor} from "./redux/store";
import dotenv from "dotenv";
import {PersistGate} from "redux-persist/integration/react";
dotenv.config();

ReactDOM.render(
    <Provider store={store} persistor={persistor}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.querySelector("#root"),
);
