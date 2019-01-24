import React from 'react';
import PcFooter from '../stateless/PcFooter';
import PcTopWithMobx from '../withMobx/PcTopWithMobx';

const Home = () => {
    return (
        <div className="App-page">
            <PcTopWithMobx />
            <h1>首页</h1>
            <PcFooter/>

        </div>
    )
}

export default Home;