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
  Col,
  Input,
  Label,
} from "reactstrap";

// const RenderCard = ({ item }) => {
//   return (
//     <Card>
//       <CardImg src={item.image} alt={item.name} />
//       <CardBody>
//         <CardTitle>{item.name}</CardTitle>
//         <CardText>{item.description}</CardText>
//       </CardBody>
//     </Card>
//   );
// };

const HomePage = () => {
  const apartments = useSelector((state) => state.apartments.apartments);
  const dispatch = useDispatch();
  console.log(apartments);
  useEffect(() => {
    getItem(dispatch);
  }, []);

  return (
    <div>
      <div className="col-9 mx-auto">
        <Form>
          <FormGroup>
            <Input placeholder="Search by Address" />
          </FormGroup>
        </Form>
      </div>
      <div className="col-9 mx-auto my-auto ">
        {apartments.map((apartment) => {
          return (
            <div key={apartment._id} className="mb-3">
              <Col md={3}>
                <Card outline>
                  <CardImg
                    top
                    width="100%"
                    src={apartment.image}
                    alt={apartment.address}
                  />
                  <CardBody>
                    <CardTitle tag="h5">{apartment.address}</CardTitle>
                    <CardSubtitle tag="h6"> {apartment.rentPrice}</CardSubtitle>
                    <CardText>{apartment.bedrooms}</CardText>
                  </CardBody>
                </Card>
              </Col>
            </div>
          );
        })}
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
