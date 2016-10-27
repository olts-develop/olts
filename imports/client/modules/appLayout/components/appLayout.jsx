
import React from 'react';

import {Row} from 'react-bootstrap';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'



import AppHeader from './appHeader.jsx';
import AppNavigation from './appNavigation.jsx'


class appLayout extends React.Component {


      render() {

            const {error} = this.props
            // const modulecontent = this.props.modulecontent;

            return(
                  <MuiThemeProvider muiTheme={getMuiTheme()}>
                  <Paper  zDepth={1}>
                        <Row className="app-header">
                              <AppHeader />
                        </Row>
                        <Row className="app-navbar">
                              <AppNavigation />
                        </Row>
                        <Row className="app-modules">

                        </Row>
                        <Row className="app-messages">

                        </Row>


                  </Paper>
                  </MuiThemeProvider>
            )
      }


      
};
 export default appLayout