import React, { useEffect } from "react";
import { Form, FormGroup, Navbar, Input, Label, Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/actions/session";
import { useHistory } from "react-router-dom";

const Login = () => {
  const errors = useSelector((state) => state.error);
  const session = useSelector((state) => state.session);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    dispatch(login(user))
      .then(() => {
        console.log("Login successful");
        // navigate("/")
      })
      .catch((err) => console.log(err));

      history.push("/")
  };

  return (
    <div>
      <div className="col-12">
        <div className="mx-auto">
          <h6>Login</h6>
        </div>
        <h6>
          <Form className="col-8 mx-auto" onSubmit={handleSubmit}>
            <FormGroup>
              <Label type="text">Email Address</Label>
              <Input type="email" placeholder="Email Address" required />
            </FormGroup>
            <FormGroup>
              <Label type="text">Password</Label>
              <Input type="password" placeholder="Password" required />
            </FormGroup>
            <Input type="submit" value="Submit"/>
          </Form>
        </h6>
      </div>
    </div>
  );
};

export default Login;
