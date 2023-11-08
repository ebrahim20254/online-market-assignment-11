import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DeveloperCard from './DeveloperCard';

const TabSection = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(()=>{
        fetch('developer.json')
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        })
    },[])
    return (
        <div className=' text-center my-12'>
            <Tabs>
                <TabList>
                    <Tab>Web Development</Tab>
                    <Tab>Digital Marketing</Tab>
                    <Tab>Graphic Design</Tab>
                </TabList>

                <TabPanel>
                    <h2>data add: {users.length}</h2>
                    <div className=' grid grid-cols-1 md:first-letter:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        users.map(user => <DeveloperCard key={user._id} user={user}></DeveloperCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabSection;