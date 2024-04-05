import React, { useState } from 'react'
import EventList from './Components/EventList';
import TabContent from './Components/TabContent';
import Header from './Components/Header';

function App() {

  const [activeTab, setactiveTab] = useState(1);
  const items = [
    {name: 'Registration', size:'6 Items', date: '12 Jan 2025'},
    {name: 'Badge Printing', size:'1 Items', date: '12 Jan 2025'},
    {name: 'Tickets', size:'3 Items', date: '12 Jan 2025'},
    {name: 'Abstracts', size:'3 Items', date: '12 Jan 2025'},
    {name: 'User Groups', size:'4 Items', date: '12 Jan 2025'},
    {name: 'Event Attendes', size:'1 Items', date: '12 Jan 2025'},
    {name: 'Schedules', size:'4 Items', date: '12 Jan 2025'},
    {name: 'Speakers',size:'2 Items',  date: '12 Jan 2025'},
    {name: 'Exhibitors', size:'4 Items', date: '12 Jan 2025'}
  ];

  return (
    <>
      <div className='container mx-auto p-4'>
        <div className=''>
          <h1 className='text-2xl font-bold'>Overview</h1>
          {/* <p>Initiate event setup and streamline essential tasks in one spot</p> */}

          <div className='flex space-x-4' >
            <button
              className={`px-4 py-2 rounded focus:outline-none ${activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
              onClick={() => setactiveTab(1)}
              >
                Things to do
            </button>
            <button 
              className={`px-4 py-2 rounded focus:outline-none ${activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
              onClick={() => {setactiveTab(2)}}
            >
              Development
            </button>
          </div>
          <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Header label="Attendees" value={1272} />
              <Header label="Sessions" value={17} />
              <Header label="Tickets" value={26} />
              <Header label="Exhibitors" value={257}/>
            </div>
          </div>
          
          <div>
            {activeTab === 1 && <EventList key={items.index} items={items}/>}
            {activeTab === 2 && <TabContent/>}
            
          </div>
        </div>
      </div>

    </>
  )
}

export default App
