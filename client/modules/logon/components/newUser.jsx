import React from 'react';
import {Row, Col} from 'react-bootstrap';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper'
import FlatButton  from 'material-ui/FlatButton';
import BackSpace from 'material-ui/svg-icons/content/backspace';

const lightMuiTheme = getMuiTheme(lightBaseTheme);

class newUser extends React.Component {

    render() {
        const {error} = this.props;
        this.createUser = this.createUser.bind(this);

        return (
              <MuiThemeProvider muiTheme={lightMuiTheme}>
                  <Paper className="form-input-small" zDepth={3}>
                      <Row>
                          <div className="col-align-right form-padding-15-right">
                              <FlatButton onMouseUp={this.back} label="Back" labelPosition="after" icon={<BackSpace/>} primary={true}/>
                          </div>
                      </Row>
                      <Row>
                          <TextField ref="user" id="user" hintText="UserId" floatingLabelText="UserId" autoFocus className="form-padding-10-left" />
                      </Row>
                      <Row>
                          <TextField ref="email"  id="email" hintText="Email" floatingLabelText="Email" className="form-padding-10-left" />
                      </Row>
                      <Row>
                          <TextField ref="password"  id="password" hintText="Password" floatingLabelText="Password" className="form-padding-10-left" />
                      </Row>
                      <Row>
                          <TextField ref="password2"  id="password2" hintText="Confirm password" floatingLabelText="Confirm password" className="form-padding-10-left" />
                      </Row>
                      <Row>
                          <div className="col-align-right form-padding-15-right">
                              <FlatButton onMouseUp={this.createUser} primary={true} type="submit" label="Sign Up"/>
                          </div>
                      </Row>


                  </Paper>
              </MuiThemeProvider>

        )
    }

    createUser(e) {
        e.preventDefault();
        const {create} = this.props;
        const {user, email, password, password2} = this.refs;
        create(user.getValue(), email.getValue(), password.getValue(), password2.getValue());
    }

    back() {
        FlowRouter.go('/')
        // const {back} = this.props;
        // back();
    }
}

export default newUser;