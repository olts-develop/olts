import React from 'react';
import {Row, Col, Button, Glyphicon, Table} from 'react-bootstrap';

const appHeader = ({employee}) => (
          <Row>

                <Col lg={5} className="align-left">
                      <h3>{employee.tenant} / {employee.organisation}</h3>
                </Col>

                <Col lg={2} className="align-center">
                      <h3>Agent Online</h3>
                </Col>

                <Col lg={5} className="align-right">
                      <div className="user-button-top">
                            <Table>
                                  <tbody>
                                  <tr>
                                        <td>
                                              <h3 text-align="right">{employee.firstName}</h3>
                                        </td>
                                        <td >
                                              <Button><Glyphicon glyph ="cog"></Glyphicon></Button>
                                        </td>
                                  </tr>
                                  </tbody>
                            </Table>
                      </div>

                </Col>


          </Row>

);



export default appHeader;
