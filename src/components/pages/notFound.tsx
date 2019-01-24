import React from 'react';
import PcTopWithMobx from '../withMobx/PcTopWithMobx';
import PcFooter from '../stateless/PcFooter';


const NotFound  = () => {
    return (
        <div className="App-page">
            <PcTopWithMobx />
            <h1>404 | NOT FOUND</h1>
        <PcFooter/>

    </div>
    )
}


export default NotFound;