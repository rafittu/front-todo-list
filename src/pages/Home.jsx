import React, { useState, useEffect } from 'react';
import * as requests from '../services/requests';

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
              <li key={user.id} data-testid="user-list">
                <a href={`/${user.id}`}>{user.name}</a>
              </li>
            ))
        }
      </span>

    </div>
  );
}

export default Home;
