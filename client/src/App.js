// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import React from 'react'
import Users from './components/users.js'
import Facts from './components/facts.js'
import Locations from './components/locations.js'

const App = () => {

  return (
    <div className="my-5 mb-10">
      <Users />
      <Facts />
      <Locations />
    </div>
  );
};

export default App;
