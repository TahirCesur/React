import React from "react";
import { Card } from "react-bootstrap";

const Person = (props) => {
  const { image, name, age } = props;
  return (
    <Card>
      <Card.Body className="d-flex">
        <Card.Img
          variant="top"
          src={`assets/img/${image}`}
          style={{ width: "100px", height: "100px" }}
          className="rounded-circle"
        />
        <div className="ms-3">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{age}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Person;

//! Card.Body parent inin içinde 3 child mevcut... Img, Title, Text
//* Img ayrı yapıp Title ve Text i bir <div></div> içine alırsak istediğimizi yapmış oluruz...
