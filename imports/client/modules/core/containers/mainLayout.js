/**
 * Created by martin on 11.11.2016.
 */

import mainLayout from '../components/mainLayout';

import {useDeps} from 'mantra-plus';
import {compose, composeAll} from 'react-komposer-plus';

const onPropsChange = ({context}, onData) => {
      //we need to pass the Store & Client to get ApolloProvider working...
      const { Client, Store } = context();

      onData(null, {
            client: Client,
            store: Store
      });


};

export default composeAll(
      compose(onPropsChange),
      useDeps()
)(mainLayout);
