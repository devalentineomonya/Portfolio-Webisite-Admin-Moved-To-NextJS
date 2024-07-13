import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ErrorBoundary from "antd/es/alert/ErrorBoundary.js";

ReactDOM.createRoot(document.getElementById("root")).render(
<ErrorBoundary>
  <App />
</ErrorBoundary>

);
