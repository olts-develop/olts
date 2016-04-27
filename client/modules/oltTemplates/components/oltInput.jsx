/**
 * Created by martin on 26.04.2016.
 */

import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Row, Col} from 'react-bootstrap'


const oltInput = React.createClass({


      propTypes:{
            id: React.PropTypes.string,
            label: React.PropTypes.string,
            type: React.PropTypes.string,
            placeholder: React.PropTypes.string,
            function: React.PropTypes.func,
            autofocus: React.PropTypes.bool,
            help: React.PropTypes.bool,
            valfunction:  React.PropTypes.func

      },


      render() {

            return(

                        <FormGroup controlId={this.props.id}>
                              <Row>
                                    <Col lg={3}className="form-col-label-right">
                              <ControlLabel>{this.props.label}</ControlLabel>
                                          </Col>
                                    <Col lg={9} className="form-col-text-field">
                              <FormControl type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.function} autoFocus={this.props.autofocus? true: false}/>
                                   </Col>
                                    </Row>
                        </FormGroup>                   


            )
      }


})

export default oltInput