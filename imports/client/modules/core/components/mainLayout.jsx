
import React, {PropTypes} from 'react';
import {ApolloProvider} from 'react-apollo'

//Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const lightMuiTheme = getMuiTheme(lightBaseTheme);

const propTypes = {
      nav: PropTypes.func,
      content: PropTypes.func.isRequired,
      footer: PropTypes.func,
      client: PropTypes.object,
      store: PropTypes.object
};

const Layout = ({
            content = () => null,
            nav = () => null,
            footer = () => null,
            client,
            store
      }) => (


      <MuiThemeProvider muiTheme={lightMuiTheme}>
            <ApolloProvider client={client} store={store}>

                  <div >
                        <header>
                              {nav()}
                        </header>

                        <div>
                              {content()}
                        </div>

                        <footer>
                              {footer()}
                        </footer>
                  </div>

            </ApolloProvider>
      </MuiThemeProvider>

);

Layout.protoTypes = propTypes
Layout.displayName = "Main Layout"

export default Layout;