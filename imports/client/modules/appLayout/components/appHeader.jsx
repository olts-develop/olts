import React from 'react';
import AppBar from 'material-ui/AppBar';
import MoreVerticalIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';

//import CurrentUserMenu from './../../currentUser/components/currentUserMenu.jsx'

const appHeader = () => (

      <AppBar
           /* title={employee.tenant + ' / ' + employee.organization}*/
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            iconElementRight={
                  <IconMenu
                        iconButtonElement={<IconButton><MoreVerticalIcon /></IconButton>}
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  >
                        <MenuItem primaryText="Refresh" />
                        <MenuItem primaryText="Help" />
                        <MenuItem primaryText="Sign out" />
                  </IconMenu>
            }
      />
);
export default appHeader;
