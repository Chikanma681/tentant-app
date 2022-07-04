import Login from "./components/Login";
import Signup from "./components/Signup";
import HomePage from "./components/Homepage";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <div className="App mt-3">
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
          {/* <Redirect to="/login" /> */}
        </Router>
      </div>
    </Provider>
  );
}

export default App;
