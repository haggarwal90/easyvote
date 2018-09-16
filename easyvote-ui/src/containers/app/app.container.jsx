import React from 'react';

import Header from 'components/header';
import Footer from 'components/footer';

export default (props) => (
    <div className='app'>
        <Header />
        { props.children}
        <Footer />
    </div>
) 