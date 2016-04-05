import React from 'react';
import {Grid, Row} from 'react-bootstrap';


import appHeader from './appHeader.jsx';
import appNavigation from './appNavigation.jsx'


class appLayout extends React.Component{

      render() {

            const {employee} = this.props;

            return (


                      <Grid>
                            <Row className="app-header">
                                  <appHeader employee={employee} />
                            </Row>
                            <Row className="app-navbar">
                                  <appNavigation />
                            </Row>
                            <Row className="app-modules">
                            </Row>
                            <Row className="app-messages">
                            </Row>


                      </Grid>
            )
      }

};

export default appLayout