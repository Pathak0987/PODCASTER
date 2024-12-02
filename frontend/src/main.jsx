import React from "react";
import ReactDOM from "react-dom/client";  // Make sure to use the correct import for React 18+
import { Provider } from "react-redux";  // Correct import for the Provider
import App from "./App.jsx";
import "./index.css";
import store from "./store";  // Import the Redux store

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>  {/* Wrap your App with the Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
