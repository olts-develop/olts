import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Header = ({tenentinfo, productinfo, userinfo}) => (
    <Row>

        <Col lg={5}>
                <h3>Tenent</h3>
        </Col>

        <Col lg={2}>
                <h3>Agent Online</h3>
        </Col>

        <Col lg={5}>
                <h3>Martin</h3>
        </Col>

    </Row>
);

export default Header;