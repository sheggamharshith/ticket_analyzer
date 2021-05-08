import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// context
import { UserProvider } from "./context/UserContext";
import { LayoutProvider } from "./context/LayoutContext";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <>
    <LayoutProvider>
      <UserProvider>
        <React.Fragment>
          <App />
          <ToastContainer />
        </React.Fragment>
      </UserProvider>
    </LayoutProvider>
  </>,
  document.getElementById("root")
);

reportWebVitals();
