import React from 'react';
import ToolBar from 'material-ui/Toolbar';
import ToolBarGroup from 'material-ui/Toolbar/ToolbarGroup';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton'


class appNavigation extends React.Component {

      render(){
            
            return(

                  <ToolBar>

                        <ToolBarGroup firstChild={true} float="left">
                              <DropDownMenu value={5}>
                                    <MenuItem value={1} primaryText = "Order"/>
                                    <MenuItem value={2} primaryText = "Agenda"/>
                                    <MenuItem value={3} primaryText = "Order action list"/>
                                    <Divider />
                                    <MenuItem value={4} primaryText = "Search allotment"/>
                                    <MenuItem value={5} primaryText = "Order" disabled={true}/>
                              </DropDownMenu>
                              <DropDownMenu  value={9}>
                                    <MenuItem value={1} primaryText = "Flight"/>
                                    <MenuItem value={2} primaryText = "Train"/>
                                    <MenuItem value={3} primaryText = "Bus"/>
                                    <MenuItem value={3} primaryText = "Ship"/>
                                    <Divider />
                                    <MenuItem value={4} primaryText = "Car"/>
                                    <MenuItem value={5} primaryText = "Hotel"/>
                                    <MenuItem value={6} primaryText = "Arrangement"/>
                                    <MenuItem value={7} primaryText = "Misc"/>
                                    <MenuItem value={8} primaryText = "Text"/>
                                    <MenuItem value={9} primaryText = "Data" disabled={true}/>
                              </DropDownMenu>
                              <FlatButton label="Customer" />
                              <FlatButton label="DMS" />
                              <DropDownMenu value={5}>
                                    <MenuItem value={1} primaryText = "Impersonal acount booking"/>
                                    <Divider />
                                    <MenuItem value={2} primaryText = "Cash up"/>
                                    <MenuItem value={3} primaryText = "Cash history"/>
                                    <MenuItem value={4} primaryText = "open cash"/>
                                    <MenuItem value={5} primaryText = "Cash" disabled={true}/>
                              </DropDownMenu>
                              <FlatButton label="Statistic"/>
                              <FlatButton label="Parameter"/>
                              <DropDownMenu  value={3}>
                                    <MenuItem value={1} primaryText = "User Accounts"/>
                                    <Divider />
                                    <MenuItem value={2} primaryText = "Employee"/>
                                    <MenuItem value={3} primaryText = "Setup" disabled={true}/>
                              </DropDownMenu>
                              <FlatButton label="System" />
                        </ToolBarGroup>

                  </ToolBar>

            )
      }
};

export default appNavigation;
