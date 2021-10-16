import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <ListGroup>
      <ListGroup.Item>
        <Link to="/">Homepage</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/birthday">Birthday</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/bs-classic">Bootstrap Classic</Link>
      </ListGroup.Item>
      <ListGroup.Item>Bootstrap React</ListGroup.Item>
      <ListGroup.Item>Clock1</ListGroup.Item>
      <ListGroup.Item>Clock2</ListGroup.Item>
    </ListGroup>
  );
};

export default Menu;
