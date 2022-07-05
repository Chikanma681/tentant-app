import Login from "./components/Login";
import Signup from "./components/Signup";
import HomePage from "./components/Homepage";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProtectedRoutes from "./util/ProtectedRoute";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="App mt-3">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route exact path="/signup" element={<Signup />} />
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
