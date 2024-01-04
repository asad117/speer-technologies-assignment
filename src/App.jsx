import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Button } from "react-bootstrap";
import Header from "./components/Header/Header.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container-view">
        <Header />
        <Router>
        {/* <Switch> */}
          <AppRoutes />
          {/* </Switch> */}
        </Router>
        {/* <Activity/> */}
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
