import React, { useEffect } from "react";
import { Form, FormGroup, Navbar, Input, Label, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../redux/actions/session";

const Signup = () => {
  const errors = useSelector((state) => state.error);
  const session = useSelector((state) => state.session);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };
    dispatch(signup(user))
      .then(() => {
        console.log("Signup Successful");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="col-12">
        <div className="mx-auto">
          <h6>Signup</h6>
        </div>
        <h6>
          <Form className="col-8 mx-auto" onSubmit={handleSubmit}>
            <FormGroup>
              <Label type="text">Username</Label>
              <Input type="text" placeholder="Username" required />
            </FormGroup>
            <FormGroup>
              <Label type="text">Email Address</Label>
              <Input type="email" placeholder="Email Address" required />
            </FormGroup>
            <FormGroup>
              <Label type="text">Password</Label>
              <Input type="password" placeholder="Password" required />
            </FormGroup>
            <Input type="submit" value="Submit" />
          </Form>
        </h6>
      </div>
    </div>
  );
};

export default Signup;
