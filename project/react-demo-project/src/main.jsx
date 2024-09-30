import React from "react";
import { createRoot } from "react-dom/client"; // Import from 'react-dom/client'
import App from "./App";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import "./index.css";

// Grab the root element from the DOM
const container = document.getElementById("root");

// Create a root using React 18's createRoot API
const root = createRoot(container);

// Render your app
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
