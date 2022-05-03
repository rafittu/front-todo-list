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
    <div id="user-page">
      <header>
        <h1>TODO LIST</h1>
      </header>

      <ul id="users-list">
        {
          !isLoading
            ? <p className="loading">Carregando...</p>
            : users.map((user) => (
              <li key={user.id} id="user" data-testid="user-list">
                <a href={`/${user.id}`}>{user.name}</a>
              </li>
            ))
        }
      </ul>

    </div>
  );
}

export default Home;
