/**
 * Created by mk on 09.05.16.
 */

import React from 'react';

import {Row, Col} from 'react-bootstrap'

import TextField from 'material-ui/TextField';



const oltAdress = React.createClass({

      propTypes:{
            addressType: React.PropTypes.string
      },
      
      render() {
            

            return (
                  <div>
                        {console.log("oltAdress: "+this.props.addressType + "company")}

                        <TextField ref={this.props.addressType + "company"} hintText="Company name" floatingLabelText="Company"/>
                        <TextField ref={this.props.addressType +"street"} hintText="Street" floatingLabelText="Street"/>
                        <TextField ref={this.props.addressType +"street2"} hintText="c/o" floatingLabelText="c/o"/>
                        <TextField ref={this.props.addressType +"county"} hintText="Country" floatingLabelText="Country"/>
                        <TextField ref={this.props.addressType +"zip"} hintText="Zip" floatingLabelText="Zip"/>
                        <TextField ref={this.props.addressType +"city"} hintText="City" floatingLabelText="City"/>
                        <TextField ref={this.props.addressType +"phonetype"} hintText="Phone type" floatingLabelText="Phone type"/>
                        <TextField ref={this.props.addressType +"phonenumber"} type="tel" hintText="Number" floatingLabelText="Phonenumber"/>

                  </div>
            )
            
      }


});

export default oltAdress;


