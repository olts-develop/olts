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
            label: React.PropTypes.string,
            function: React.PropTypes.func

      },
      


      render() {

            return(

                                  
                  <FormGroup controlId={this.props.id} className="form-col-radio-center">
                        <ControlLabel>{this.props.label}</ControlLabel>
                        {' '}
                        {this.props.radios.map(radio => (
                              <Radio id={this.props.id} key={radio} value={radio} inline={this.props.inline? true: false} name={this.props.id} onChange={this.props.function}>
                                    {radio}
                              </Radio>
                        ))}
                  </FormGroup>


            )
      }


});
export default oltRadio

                   