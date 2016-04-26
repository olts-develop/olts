/**
 * Created by martin on 26.04.2016.
 */

import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap'


const oltInput = React.createClass({


      propTypes:{
            id: React.PropTypes.string,
            label: React.PropTypes.string,
            type: React.PropTypes.string,
            placeholder: React.PropTypes.string,
            function: React.PropTypes.func,
            help: React.PropTypes.bool,
            valfunction:  React.PropTypes.func

      },

      defaultProps(){
            space:"' '"
      },


      render() {

            return(

                        <FormGroup controlId={this.props.id}>
                              <ControlLabel>{this.props.label}</ControlLabel>
                              {' '}
                              <FormControl type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.function}/>
                        </FormGroup>                   


            )
      }


})

export default oltInput