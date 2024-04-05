import React from 'react';

function Header({ label, value, icon }) {
  return (
    <div className='bg-white rounded-lg shadow-md p-4 border border-gray-300'>
      <div className='flex items-center'>
        <div className='mr-4'>{icon}</div>
        <div>
          <p className='text-gray-600 font-semibold'>{label}</p>
          <p className='text-xl font-bold'>{value}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
