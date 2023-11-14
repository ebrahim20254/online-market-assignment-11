import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DeveloperCard from './DeveloperCard';
import ActiveTab from './ActiveTab';

const TabSection = () => {
    const [users, setUsers] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        fetch('https://online-market-server-assignment-11.vercel.app/jobs')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    const developer = users.filter(user => user.category === "developer")
    const marketer = users.filter(user => user.category === "marketer")
    const graphic = users.filter(user => user.category === "graphic")


    return (
        <div className=' text-center my-12'>
            <h2 className=' text-5xl text-center font-bold text-orange-500 mb-8'>Featured Tabs</h2>
            <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
                <TabList>
                    <Tab>Web Development</Tab>
                    <Tab>Digital Marketing</Tab>
                    <Tab>Graphic Design</Tab>
                </TabList>
                <TabPanel>
                    <ActiveTab users={developer}></ActiveTab>
                </TabPanel>
                <TabPanel>
                    <ActiveTab users={marketer}></ActiveTab>
                </TabPanel>
                <TabPanel>
                    <ActiveTab users={graphic}></ActiveTab>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default TabSection;