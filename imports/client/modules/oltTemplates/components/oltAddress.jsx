/**
 * Created by mk on 09.05.16.
 */

import React from 'react';

import TextField from 'material-ui/TextField';


class oltAdress extends React.Component {
      
      
      render() {

            const addressFor = this.props;

            return (
                  <div>
                        
                        <TextField ref={addressFor? addressFor + "company":"company"} hintText="Company name" floatingLabelText="Company"/>
                        <TextField ref={addressFor? addressFor +"street":"street"} hintText="Street" floatingLabelText="Street"/>
                        <TextField ref={addressFor? addressFor +"street2":"street2"} hintText="c/o" floatingLabelText="c/o"/>
                        <TextField ref={addressFor? addressFor +"county":"county"} hintText="Country" floatingLabelText="Country"/>
                        <TextField ref={addressFor? addressFor +"zip":"zip"} hintText="Zip" floatingLabelText="Zip"/>
                        <TextField ref={addressFor? addressFor +"city":"city"} hintText="City" floatingLabelText="City"/>
                        <TextField ref={addressFor? addressFor +"phonetype":"phonetype"} hintText="Phone type" floatingLabelText="Phone type"/>
                        <TextField ref={addressFor? addressFor +"phonenumber":"phonenumber"} type="tel" hintText="Number" floatingLabelText="Phonenumber"/>

                  </div>
            )
            
      }


};

export default oltAdress;


