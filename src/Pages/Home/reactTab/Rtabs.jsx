import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Details from '../../AllToyes/Details';


const Rtabs = () => {
    return (
        <div className='my-8'>
            <h1 className='text-green-600 text-4xl mb-8'>Action figure toys Tabs SEction</h1>
            <Tabs>
                <TabList>
                    <Tab>Marvel</Tab>
                    <Tab><h1 className='text-green-600'>DC</h1></Tab>
                    <Tab>Avengers</Tab>
                </TabList>

                <TabPanel>
                    <div>
                        <Details></Details>
                        <Details></Details>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Rtabs;