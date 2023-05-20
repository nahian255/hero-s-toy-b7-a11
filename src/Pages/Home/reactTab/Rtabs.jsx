import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Details from '../../AllToyes/Details';
import TabDetails from './TabDetails';
import AllToyes from '../../AllToyes/AllToyes';


const Rtabs = () => {
    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" className='my-8'>
            <h1 data-aos="fade-up"
                data-aos-anchor-placement="center-bottom" className='text-green-600 text-4xl mb-8'>Action figure toys Tabs SEction</h1>
            <Tabs>
                <TabList>
                    <Tab ><h1 className='text-purple-800 text-xl'>Marvel</h1></Tab>
                    <Tab><h1 className='text-red-700 text-xl'>DC</h1></Tab>
                    <Tab> <h1 className='text-rose-800 text-xl'>Avengers</h1></Tab>
                </TabList>

                <TabPanel>
                    <div>
                        <h1 className='text-xl' >Sub-Category : <span className='text-4xl text-green-600'>Marvel</span></h1>
                        <AllToyes></AllToyes>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <h1 className='text-xl' >Sub-Category : <span className='text-4xl text-green-600'>DC</span></h1>
                        <AllToyes></AllToyes>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <h1 className='text-xl' >Sub-Category : <span className='text-4xl text-green-600'>Avengers</span></h1>
                        <AllToyes></AllToyes>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Rtabs;