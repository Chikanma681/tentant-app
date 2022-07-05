import React, { useEffect } from "react";
import { logout } from "../redux/actions/session";
import {
  getItem,
  getItemId,
  addItem,
  deleteItem,
} from "../redux/actions/apartmentAction";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";


const RenderCard = ({ item }) => {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
};

const HomePage = () => {
  const apartments = useSelector((state) => state.apartments.apartments);
  const dispatch = useDispatch();

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div className="col-8 mx-auto">
      <div>
        <Form>
          <FormGroup>
            <Input placeholder="Search by Address" />
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default HomePage;

// let see how we gonna tackle this problem

/*
- first we need the user to signup and login
-  we will carry this information  in the request body'
- then we need a way to display the tentant information as a card
- then finally we need a way for landlord to post information
*/
