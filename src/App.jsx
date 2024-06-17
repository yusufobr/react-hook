import React from 'react';
import UserDetails from './components/UserDetails';

const App = () => {
  return (
    <div className='container mx-auto p-10 flex flex-col gap-4 justify-between items-center'>
      <h1>Fetch User Details</h1>
      <UserDetails userId="3" />
    </div>
  );
};

export default App;
