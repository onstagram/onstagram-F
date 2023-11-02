import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import configureStore from "./store/index"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    {/* <CookiesProvider> */}
    <Provider store={configureStore}>
      <App />
    </Provider>
    {/* </CookiesProvider> */}
  </React.StrictMode>
)
