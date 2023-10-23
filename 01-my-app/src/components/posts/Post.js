import React from "react";
import { Card } from "react-bootstrap";

const Post = (props) => {
  const { baslik, mesaj } = props;

  return (
    <Card className="mb-4">
      <Card.Body>
        <h2>{baslik}</h2>
        <p>{mesaj}</p>
      </Card.Body>
    </Card>
  );
};

export default Post;
