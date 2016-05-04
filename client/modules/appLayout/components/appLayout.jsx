import React from 'react';
import {Row} from 'react-bootstrap';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'



import AppHeader from './appHeader.jsx';
import AppNavigation from './../components/appNavigation.jsx'


class appLayout extends React.Component {


      render() {

            const {employee} = this.props
            const modulecontent = this.props.modulecontent;

            return(
                  <MuiThemeProvider muiTheme={getMuiTheme()}>
                  <Paper  zDepth={1}>
                        <Row className="app-header">
                              <AppHeader employee={employee} />
                        </Row>
                        <Row className="app-navbar">
                              {<AppNavigation employee={employee}/>}
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