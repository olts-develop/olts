/**
 * Created by martin on 21.04.2016.
 */

import React from 'react';
import BootstrapSelect from 'react-bootstrap-select'
import {Form, FormGroup, ControlLabel, Panel, Row, Col} from 'react-bootstrap'
import OltInput from '../../oltTemplates/components/oltInput.jsx';
import OltRadio from '../../oltTemplates/components/oltRadio.jsx';

employeeVals = {}
options = []

class employee extends React.Component {


      handleChange(event){

            employeeVals[event.target.id] = event.target.value
      }



      render() {

            const {languages}= this.props;



            return (
                  <Panel className="full-screen-input">
                        <Form>
                              <Row>
                                    <Col lg={3}>
                                          <OltInput id="name" label="Name" type="text" placeholder="name of the employee" function={this.handleChange} autofocus={true}/>
                                    </Col>
                                    <Col  lg={3}>
                                          <OltInput id="forename" label="Forename" type="text" placeholder="forename of the employee" function={this.handleChange}/>
                                    </Col>
                                    <Col  lg={3}>
                                          <OltInput id="birthday" label="Birthday" type="date" placeholder="birthday" function={this.handleChange}/>
                                    </Col>
                                    <Col  lg={3}>
                                          <OltRadio id="gender" radios={['M','F','undefined']} inline={true} label="Gender"/>
                                    </Col>
                              </Row>
                              <Row>
                                    <Col lg={3}>
                                          <OltInput id="mail" label="Mail" type="text" placeholder="email" function={this.handleChange}/>
                                    </Col>
                                    <Col  lg={3}>
                                          <OltInput id="phone" label="Phone" type="text" placeholder="telephone" function={this.handleChange}/>
                                    </Col>
                                    <Col  lg={3}>
                                          <FormGroup className="form-col-text-field">
                                                <Row>
                                                      <Col lg={3}className="form-col-label-right">
                                                            <ControlLabel>Language</ControlLabel>
                                                      </Col>
                                                      <Col lg={9} className="form-col-text-field">
                                                            <BootstrapSelect id="language" className="form-col-select" onChange={this.handleChange} >
                                                                  <optgroup>
                                                                        {languages.map(lang =>(lang.sortTop==true?
                                                                              <option key={lang.langCode} value={lang.langCode}>{lang.language}</option>
                                                                              :null)
                                                                        )};
                                                                  </optgroup>
                                                                  <optgroup>
                                                                        {languages.map(lang =>(lang.sortTop==false||lang.sortTop==undefined?
                                                                              <option key={lang.langCode} value={lang.langCode}>{lang.language}</option>
                                                                              :null)
                                                                        )};
                                                                  </optgroup>
                                                            </BootstrapSelect>
                                                      </Col>
                                                </Row>
                                          </FormGroup>
                                    </Col>
                                    <Col  lg={3}>
                                         
                                    </Col>
                              </Row>
                        </Form>

                  </Panel>



            )
      }

};
export default employee