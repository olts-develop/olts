import React from 'react';
import {Row, Col} from 'react-bootstrap';

import Header from './Header.jsx';

class AppLayout extends React.Component{

    render() {
        const {tenentinfo, productinfo, userinfo}=this.props;
/*
        tenentinfo.name = 'Tenten';
        productinfo.name = 'Agent Online';
        userinfo.name = 'Martin';

*/


        return (
            <div id="headerinfo" ref="headerinfo">
                <Header/>
            </div>
        )
    }

}

export default AppLayout