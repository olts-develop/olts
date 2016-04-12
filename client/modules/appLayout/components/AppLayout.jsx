import React from 'react';
import {Grid, Row} from 'react-bootstrap';


import AppHeader from './appHeader.jsx';
import AppNavigation from './appNavigation.jsx'


class appLayout extends React.Component {

      render() {

            const {employee} = this.props
            let modulecontent = this.props.modulecontent;

            if (!modulecontent){
                  modulecontent = function () {}
            }

            return(
                  <Grid>
                        <Row className="app-header">
                              <AppHeader employee={employee} />
                        </Row>
                        <Row className="app-navbar">
                              <AppNavigation />
                        </Row>
                        <Row className="app-modules">
                              {modulecontent()}
                        </Row>
                        <Row className="app-messages">
                        </Row>


                  </Grid>
            )
      }

};
 export default appLayout