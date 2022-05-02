import React, { useState, useEffect } from 'react';
import * as requests from '../services/requests';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const { response, data } = await requests.getUsers();
      if (response.status !== 200) return response;
      return setUsers(data);
    };
    getUsers();
  });

  console.log(users);

  return (
    <h1>TODO LIST</h1>
  );
}

export default Home;
