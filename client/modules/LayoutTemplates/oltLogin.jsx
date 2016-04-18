/**
 * Created by martin on 13.04.2016.
 */

import React from 'react';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

class oltLogin extends React.Component {

      render() {

            const {error} = this.props;

            const style = {
                  align: 'center',
                  height: 300,
                  width: 300,
                  margin: 20,
                  textAlign: 'center',
                  display: 'inline-block',
            };

            return (
                  <div>
                        <Paper style={style} zDepth={1}>
                              <h1>Login</h1>
                              {error ? <p style = {{color: 'red'}}>{error}</p> :null}
                              <TextField hintText="User / Email" floatingLabelText="User / Email" />
                              <TextField hintText="Password" floatingLabelText="Password" type="password" />
                              <row>
                                    <col>
                                          <RaisedButton label="Login" primary={true}/>
                                    </col>
                                    <col>
                                          <RaisedButton label="Logout" primary={true}/>
                                    </col>
                              </row>
                        </Paper>
                  </div>


      )
      }

      }
      ;
      export default oltLogin