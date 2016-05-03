import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin()

const Layout = ({content}) => (

    <div >
        <div>
            {content()}
        </div>
    </div>

);

export default Layout;