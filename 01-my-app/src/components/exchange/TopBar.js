import React, {useContext} from "react";
import {Navbar, Container, Nav, Badge} from "react-bootstrap";
import {StoreContext} from "../../store";

const TopBar = () => {
    const context = useContext(StoreContext);

    const usd = (1 / context.kurlar.USD).toFixed(2);
    const eur = (1 / context.kurlar.EUR).toFixed(2);

    return (
        <Navbar bg="primary" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="text-white">Exchange</Navbar.Brand>
                <Nav className="ms-auto text-white">
                    <Badge bg="warning" text="dark">
                        $
                    </Badge>&nbsp;
                    {usd}&nbsp;₺ &nbsp;&nbsp;
                    <Badge bg="danger" text="dark">
                        €
                    </Badge>&nbsp;
                    {eur}&nbsp;₺
                </Nav>
            </Container>
        </Navbar>
    );
};

export default TopBar;

//! Badge renkli buton kodlarıdır...
