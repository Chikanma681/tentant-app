import Login from "./components/Login";
import Signup from "./components/Signup";
import HomePage from "./components/Homepage"
import { Navbar } from "reactstrap";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <Navbar color="success">
        <div style={{ color: "white" }} >
          <h5>RentScape</h5>
        </div>
      </Navbar>
      <div className="App mt-3">
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
