/**
 * Created by martin on 27.04.2016.
 */

import React from 'react';
import {FormGroup, ControlLabel, Radio} from 'react-bootstrap'


const oltRadio = React.createClass({


      propTypes:{
            id: React.PropTypes.string,
            Radios: React.PropTypes.array,
            inline: React.PropTypes.bool,
            label: React.PropTypes.string

      },
      


      render() {

            return(

                                  
                  <FormGroup controlId={this.props.id} className="form-col-radio-center">
                        <ControlLabel>{this.props.label}</ControlLabel>
                        {' '}
                        {this.props.radios.map(radio => (
                              <Radio inline={this.props.inline? true: false} name={this.props.id}>
                                    {radio}
                              </Radio>
                        ))}
                  </FormGroup>


            )
      }


});
export default oltRadio

                   