import React from 'react';
import {Row, Col} from 'react-bootstrap';

import currentUserMenu from './../../currentUser/components/currentUserMenu.jsx'

const appHeader = ({employee}) => (
      <Row>

            <Col lg={5} className="align-left">
                  <h3>{employee.tenant} / {employee.organisation}</h3>
            </Col>

            <Col lg={2} className="align-center">
                  <h3>Agent Online</h3>
            </Col>

            <Col lg={5} className="align-right">
                  <currentUserMenu employee={employee}/>
            </Col>


      </Row>

);



export default appHeader;
