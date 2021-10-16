import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/shared/Menu";
import HomePage from "./pages/HomePage";
import BirthdayPage from "./pages/BirthdayPage";
import BoostrapClassicPage from "./pages/BoostrapClassicPage";
import Header from "./components/shared/Header";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Row>
          <Col md={4}>
            <Menu />
          </Col>
          <Col md={8}>
            <Switch>
              <Route path="/bs-classic">
                <BoostrapClassicPage />
              </Route>
              <Route path="/birthday">
                <BirthdayPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
