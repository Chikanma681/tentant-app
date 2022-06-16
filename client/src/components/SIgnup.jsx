import React from "react";
import { Form, FormGroup, Navbar, Input, Label, Button } from "reactstrap";

const Signup = () => {
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
            <Label type="text">Username</Label>
            <Input type="email" />
          </FormGroup>
          <FormGroup>
            <Label type="text">Email Address</Label>
            <Input type="email" />
          </FormGroup>
          <FormGroup>
            <Label type="text">Password</Label>
            <Input type="email" />
          </FormGroup>
          <Button type="submit">Sign Up</Button>
        </Form>
      </div>
      <div>
        <p>Signup</p>
      </div>
    </div>
  );
};

export default Signup;
