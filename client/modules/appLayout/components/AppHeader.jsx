import React from 'react';
import {Row, Col} from 'react-bootstrap';

const appHeader = ({employee}) => (
          <Row>

                <Col lg={5}>
                      <h3>{employee.tenant}</h3>
                </Col>

                <Col lg={2}>
                      <h3>Agent Online</h3>
                </Col>

                <Col lg={5}>
                      <h3>{employee.name}</h3>
                </Col>

          </Row>
);

      

export default appHeader;
