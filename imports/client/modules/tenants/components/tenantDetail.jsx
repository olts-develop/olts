/**
 * Created by mk on 04.05.16.
 */

import React, {PropTypes} from 'react';

//Material-UI
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Add from 'material-ui/svg-icons/content/add'
import Toggle from 'material-ui/Toggle';


const propTypes = {
    tenant: PropTypes.object,
    handleChange: PropTypes.func,
    addTenant: PropTypes.func,
      handleToggle: PropTypes.func
};

const tenantDetail = ({
      tenant,
      handleChange,
      addTenant,
      handleToggle,

      }) => (


                  <div>

                        <TextField
                              ref="code"
                              hintText="Tenant code"
                              floatingLabelText="Code"
                              value={tenant ? tenant.code : ''}
                              onChange={handleChange}
                              autoFocus
                        />
                        <TextField
                              ref="description"
                              hintText="Tenant name/description"
                              floatingLabelText="Description"
                              value={tenant ? tenant.description : ''}
                              onChange={handleChange}
                        />

                        <Toggle
                              name="isActive"
                              Value="isActive"
                              lable = "Active"
                              toggle={tenant ? tenant.isActive: false}
                              onToggle={handleToggle}
                        />

                        <div className="col-align-right form-padding-15-right">
                              <FlatButton
                                    onClick={addTenant}
                                    label="Add"
                                    labelPosition="after"
                                    icon={<Add/>}
                                    primary={true}
                              />
                        </div>


                  </div>
);

tenantDetail.propTypes = propTypes;

export default tenantDetail