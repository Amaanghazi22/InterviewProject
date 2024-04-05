import React, {useState} from 'react'

function EventList({items}) {

    const [eventInfo, setIventInfo] = useState("");
    const ImgUrl = "https://inventstore.in/wp-content/uploads/2023/04/Blue-scaled.webp";


  return (
    <div className='flex items-center'>
        <div className='bg-gray-100 p-4 w-6/12'>
        <h2 className='text-xl font-bold mb-4'>Things to Do</h2>
        <ul>
            {items.map((items, index) => (
                <li key={index} className='flex items-center justify-between py-2 border-b border-gray-300'>
                    <label className='flex items-center'>
                        <input type="radio-checkbox" className='mr-2 form-checkbox h-5 w-5 rounded text-blue-500' />
                        <span>{items.name}</span>
                    </label>
                    <span className='text-green-800 bg-green-200 px-2 rounded'>{items.size}</span>
                    <span>{items.date}</span>
                </li>
            ))}
        </ul>
        </div>

        <div className='bg-gray-200 p-4 w-6/12'>
            <h2 className='text-xl font-bold '>Event Information</h2>
            <img className='w-6/12 h-6/12'src={ImgUrl} alt="" />
            <label htmlFor="">Landing Page: </label>
            <input type="text" value={eventInfo} placeholder="https://inovatetech.com" onChange={(e) => setIventInfo(e.target.value)}/>
            <br />
            <label htmlFor="">Promotional Page: </label>
            <input type="text" value={eventInfo} placeholder="https://inovatetech.com" onChange={(e) => setIventInfo(e.target.value)}/>
        </div>
    </div>
    
  )
}

export default EventList