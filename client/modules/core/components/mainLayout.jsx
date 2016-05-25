import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
//import i18nStartup from './../../core/configs/i18n_startup'

injectTapEventPlugin()
//i18nStartup()

const Layout = ({content}) => (

    <div >
        <div>
            {content()}
        </div>
    </div>

);

export default Layout;