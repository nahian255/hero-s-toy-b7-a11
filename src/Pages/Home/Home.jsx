import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Tabs from './reactTab/Tabs';

const Home = () => {
    return (
        <div>
            <h1>home</h1>
            <Banner></Banner>
            <Gallery></Gallery>
            <Tabs></Tabs>
        </div>
    );
};

export default Home;