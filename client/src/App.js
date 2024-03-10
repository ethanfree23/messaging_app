import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Users from './components/users.js'

const App = () => {
  // State to store the fetched data
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/v1/users');
        // Set the users state with the fetched data
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run only once on component mount

  return (
    <div className="my-5 mb-10">
      <Users />
    </div>
  );
};

export default App;
