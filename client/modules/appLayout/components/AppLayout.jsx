import React from 'react';
import {Grid, Row} from 'react-bootstrap';


import AppHeader from './appHeader.jsx';
import AppNavigation from './appNavigation.jsx'
import OltAppBar from './../../LayoutTemplates/oltAppBar.jsx'

class appLayout extends React.Component {
      
      render() {

            const {employee} = this.props
            const modulecontent = this.props.modulecontent;


            return(
                  <Grid fluid={true}>
                        <Row className="app-header">
                              <AppHeader employee={employee}/>
                        </Row>
                        <Row className="app-navbar">
                              <AppNavigation />
                        </Row>
                        <Row className="app-modules">
                              {modulecontent? modulecontent(): null}
                        </Row>
                        <Row className="app-messages">
                        </Row>


                  </Grid>
            )
      }

};
 export default appLayout