import React from 'react';


const Layout = ({content}) => (

    <div >
        <div>
            {content()}
        </div>
    </div>

);

export default Layout;