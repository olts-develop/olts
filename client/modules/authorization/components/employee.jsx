/**
 * Created by martin on 21.04.2016.
 */

import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Radio, Panel, Row, Col} from 'react-bootstrap'
import DateTimeField from 'react-bootstrap-datetimepicker';
import OltInput from './../../oltTemplates/components/oltInput.jsx'

employeeVals = {}


class employee extends React.Component {

      handleChange(event){

            employeeVals[event.target.id] = event.target.value
      }
      


      render() {


            return (
                  <Panel className="EmployeeInput">
                        <Form inline>
                              <OltInput id="name" label="Name" type="text" placeholder="name of the employee" function={this.handleChange}/>
                              {' '}
                              <OltInput id="forename" label="Forename" type="text" placeholder="forename of the employee" function={this.handleChange}/>
                              {' '}
                              <OltInput id="birthday" label="Date of birth" type="date" placeholder="birthday" function={this.handleChange}/>
                              {' '}
                              <FormGroup controlId="gender">
                                    <ControlLabel>Gender</ControlLabel>
                                    {' '}
                                    <Radio inline name="gender">
                                          M
                                    </Radio>
                                    {' '}
                                    <Radio inline name="gender">
                                          F
                                    </Radio>
                                    {' '}
                                    <Radio inline name="gender">
                                          undefined
                                    </Radio>
                              </FormGroup>
                        </Form>
                        <p/>
                        <Form inline>
                              <OltInput id="test" label="Tester" type="text" placeholder="please enter test" function={this.handleChange}/>
                        </Form>


                  </Panel>



            )
      }

};
export default employee