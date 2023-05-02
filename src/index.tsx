import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomeProvider from "./Providers/homeContext";
import { AuthContextProvider } from "./context/AuthContext";
import RecoveryProvider from "./Providers/recoveryContext";
import GlobalStyles from "./styles/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GlobalStyles />
      <HomeProvider>
        <RecoveryProvider>
          <App />
        </RecoveryProvider>
      </HomeProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
