import React from "react";
import { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Fade,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../util/ProtectedRoute";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const isAuth = useAuth();

  return (
    <Navbar color="success" dark expand="sm">
        <NavbarBrand href="/">
          <h6>RentScape</h6>
        </NavbarBrand>
        <NavbarToggler onClick={handleToggle}  />
        <Collapse isOpen={toggle} navbar>
          <Nav navbar className="ms-auto mb-lg-0">
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            {isAuth ? (
              <React.Fragment>
                <NavItem>
                  <NavLink href="#">Logout</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Post Apartment</NavLink>
                </NavItem>
              </React.Fragment>
            ) : (
              ""
            )}
          </Nav>
        </Collapse>
    </Navbar>
  );
};

export default Header;
