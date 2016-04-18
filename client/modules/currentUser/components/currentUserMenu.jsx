/**
 * Created by martin on 13.04.2016.
 */

import React from 'react';
import {ButtonToolbar,DropdownButton, MenuItem, Glyphicon} from 'react-bootstrap';


const currentUserMenu = ({employee}) => (

            <DropdownButton bsStyle="default" title={employee.firstName} noCaret id="dropdown-no-caret">
                  <MenuItem eventKey="1">My Settings</MenuItem>
                  <MenuItem eventKey="2">set tenent/org</MenuItem>
                  <MenuItem devider/>
                  <MenuItem eventKey="3">logout</MenuItem>
            </DropdownButton>

);
export default currentUserMenu