import React, {useContext, useState} from "react";
import {
    Container,
    FormControl,
    InputGroup,
    Button,
    Row,
    Col,
} from "react-bootstrap";
import {StoreContext} from "../../store";

const Content = () => {
    
    const [eur, setEur] = useState(0);
    const [usd, setUsd] = useState(0);
    const [tl, setTl] = useState(0);
    const contex = useContext(StoreContext);
    const kurlar = contex.kurlar;

    const cevirUsd = () => {
        const tlDegerUsd = (usd / kurlar.EUR).toFixed(2);
        setTl(tlDegerUsd);
    };

    const cevirEur = () => {
        const tlDegerEur = (eur / kurlar.USD).toFixed(2);
        setTl(tlDegerEur);
    };

    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col md={6}>
                    <InputGroup className="mb-3">
                        <FormControl
                            type="number"
                            value={usd}
                            onChange={(e) => setUsd(e.target.value)}
                        />
                        <InputGroup.Text>€</InputGroup.Text>
                        <Button
                            variant="outline-secondary"
                            id="button-addon2"
                            onClick={cevirUsd}
                        >
                            TL'ye çevir
                        </Button>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            type="number"
                            value={eur}
                            onChange={(e) => setEur(e.target.value)}
                        />
                        <InputGroup.Text>$</InputGroup.Text>
                        <Button
                            variant="outline-secondary"
                            id="button-addon2"
                            onClick={cevirEur}
                        >
                            TL'ye çevir
                        </Button>
                    </InputGroup>
                </Col>
                <Col xs={12}>
                    <h3 className="text-center">{tl}&nbsp;₺</h3>
                </Col>
            </Row>
        </Container>
    );
};

export default Content;
