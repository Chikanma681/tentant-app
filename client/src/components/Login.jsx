import React from "react";
import { Form, FormGroup, Navbar, Input, Label, Button } from "reactstrap";

const Login = () => {
  return (
    <div>
      <Navbar color="success">
        <div style={{ color: "white" }}>
          <h5>RentArc</h5>
        </div>
      </Navbar>
      <div>
        <Form>
          <FormGroup>
            <Label type="text">Email Address</Label>
            <Input type="email" />
          </FormGroup>
          <FormGroup>
            <Label type="text">Password</Label>
            <Input type="email" />
          </FormGroup>
          <Button type="submit">Login</Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
