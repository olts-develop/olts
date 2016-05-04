/**
 * Created by mk on 04.05.16.
 */

import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider';


class orderMenu extends React.Component {


      render() {

            const {error} = this.props;
            
            return (
                  <DropDownMenu  value={0} >
                        
                        <MenuItem value={0} primaryText = "Order" disabled={true}/>
                        <Divider />
                        <MenuItem value={1} onTouchTap={this.setOrder} primaryText = "Order"/>
                        <MenuItem value={2} onTouchTap={this.setAgenda} primaryText = "Agenda"/>
                        <MenuItem value={3} onTouchTap={this.setActionList} primaryText = "Order action list"/>
                        <Divider />
                        <MenuItem value={4} onTouchTap={this.setSearchAllotments} primaryText = "Search allotment"/>

                  </DropDownMenu>
            )
      }


};
export default orderMenu