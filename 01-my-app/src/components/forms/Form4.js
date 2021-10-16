import React, { useState } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";

const Form4 = () => {
  const [formData, setFormData] = useState({
    ad: "",
    soyad: "",
    email: "",
    telefon: "",
  });

  const [mesaj, setMesaj] = useState("");
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

    setValidated(true);

    setLoading(true);
    setMesaj("");
    console.log(formData);

    // Burası fake API. Normalde burada fetch ya da axios gibi bir kütüphane ile API a bağlanılması gerekir.
    // Ancak biz setTimeout ile fake bir API bağlantısı yaptık
    setTimeout(() => {
      setMesaj("Bilgileriniz başarılı bir şekilde gönderildi");
      setLoading(false);
    }, 3000);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={5}>
          {mesaj && <Alert variant="info">{mesaj}</Alert>}

          <Form noValidate onSubmit={handleSubmit} validated={validated}>
            <Form.Group className="mb-3" controlId="ad">
              <Form.Label>Adınız</Form.Label>
              <Form.Control
                required
                minLength="3"
                name="ad"
                type="text"
                placeholder="Adınızı giriniz"
                value={formData.ad}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Adınızı giriniz
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="soyad">
              <Form.Label>Soyadınız</Form.Label>
              <Form.Control
                required
                name="soyad"
                type="text"
                placeholder="Soyadınızı giriniz"
                value={formData.soyad}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Soyadınızı giriniz
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Eposta Adresiniz</Form.Label>
              <Form.Control
                required
                name="email"
                type="email"
                placeholder="Epostanızı giriniz"
                value={formData.email}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Geçerli bir eposta giriniz
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="telefon">
              <Form.Label>Telefonunuz</Form.Label>
              <Form.Control
                name="telefon"
                type="text"
                placeholder="Telefonunuzu giriniz"
                value={formData.telefon}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="info" type="submit" disabled={loading}>
              {loading && (
                <Spinner animation="border" variant="light" size="sm" />
              )}
              KAYDET
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Form4;
