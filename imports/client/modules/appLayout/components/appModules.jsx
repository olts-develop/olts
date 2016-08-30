/**
 * Created by martin on 05.04.2016.
 */

import React from 'react';
import {Row, Col} from 'react-bootstrap';

const appModules = ({appmenue,appcontent}) => (

          <div>
                <Col lg={2} className="align-right">
                      <h3>app menu list</h3>
                      {appmenue()}
                </Col>

                <Col lg={10} className="align-center">
                      <h3>app module screens</h3>
                      {appcontent()}
                </Col>

          </div>

          
);

export default appModules