import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Rtabs from './reactTab/Rtabs';
import Carosol from './Carosol/Carosol';
import Other from './other/Other';
import useTitle from '../../hook/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Rtabs></Rtabs>
            <Carosol></Carosol>
            <Other></Other>
        </div>
    );
};

export default Home;