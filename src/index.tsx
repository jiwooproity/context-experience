import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";

// original redux store
// import { createStore } from "redux";
// import rootReducer from "./redux";
// const originalStore = createStore(rootReducer);

// redux toolkit store
import store from "./reduxToolkit";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </Provider>
);
