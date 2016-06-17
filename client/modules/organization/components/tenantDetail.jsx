/**
 * Created by mk on 04.05.16.
 */

import React from 'react';

//Material-UI
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Add from 'material-ui/svg-icons/content/add'
import Create from 'material-ui/svg-icons/content/create'


class tenantDetail extends React.Component {

    // componentWillReceiveProps () {
    //     const {tenant, setUpdateStatus} = this.props
    //     setUpdateStatus(tenant)
    // }


    render() {

        const { tenant, tenantState, error} = this.props;

        this.addTenant = this.addTenant.bind(this)
        /*this.updateTenant = this.updateTenant.bind(this)*/
        //this.handleChange = this.handleChange.bind(this, tenant)


        return (
              <div>
                  <TextField ref="code" hintText="Tenant code" floatingLabelText= "Code" value={tenant? tenant.code:''} onChange={this.handleChange.bind(this, tenant)} name="code" autoFocus/>
                  <TextField ref="description" hintText="Tenant name/description" floatingLabelText= "Description"  value={tenant? tenant.description:null}/>

                  <div className="col-align-right form-padding-15-right">
                      <FlatButton  onMouseUp={this.addTenant} label="Add" labelPosition="after" icon={<Add/>} primary={true}/>
                      {tenantState=='SELECTED'? <FlatButton  onMouseUp={this.updateTenant} label="Update" labelPosition="after" icon={<Create/>} primary={true}/>: ''}
                  </div>
              </div>

        )
    }


    addTenant(event) {
        event.preventDefault();
        const {addTenant}=this.props;
        const {code, description} = this.refs;
        addTenant(code.getValue(), description.getValue());

    }

    // updateTenant(event) {
    //     event.preventDefault();
    //     console.log('update Tenant')
    // }

    handleChange (tenant, event) {
        event.preventDefault();
        const {handleChange}=this.props;
        const {code, description} = this.refs;
        tenant.code=code.getValue()
        tenant.description=description.getValue()
        handleChange(tenant)
    };


}

export default tenantDetail