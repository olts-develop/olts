
import React, { PropTypes } from 'react';
import {ApolloProvider} from 'react-apollo';

const propTypes = {
      content: PropTypes.func.isRequired,
      client: PropTypes.object,
      store: PropTypes.object
};

const Layout = ({
      content = () => null,
      client,
      store
      }) => (

      <ApolloProvider client={client} store={store}>
            <div >
                  <div>
                        {content()}
                  </div>
            </div>
      </ApolloProvider>

);

Layout.propTypes = propTypes;
Layout.displayName = "Main Layout";

export default Layout;