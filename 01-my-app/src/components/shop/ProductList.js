import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../../data/products.json"; //! data kalsöründeki json dosyasını import ettik..
import Product from "./Product";

// Döngü kurarak 6 adet kulaklığın json dosyasından gelmesini sağlayacağız...
const ProductList = () => {
  return (
    <Container className="my-5">
      <Row className="g-5">
        {data.map((product) => {
          const { id, title, image, desc, price } = product;
          return (
            <Col md={4} key={id}>
              <Product title={title} image={image} desc={desc} price={price} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductList;
