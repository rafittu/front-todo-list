import React, { useState, useEffect } from 'react';
import * as requests from '../services/requests';
import User from '../components/User';

function Home() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const getUsers = async () => {
      const { response, data } = await requests.getUsers();
      if (response.status !== 200) return response;
      setUsers(data);

      return setIsLoading('false');
    };
    getUsers();
  }, []);

  return (
    <div>
      <h1>TODO LIST</h1>

      <span>
        {
          !isLoading
            ? 'Carregando...'
            : users.map((user) => (
              <User id={user.id} key={user.id} name={user.name} />
            ))
        }
      </span>

    </div>
  );
}

export default Home;
