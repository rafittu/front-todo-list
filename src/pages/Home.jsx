import React, { useState, useEffect } from 'react';
import * as requests from '../services/requests';

import '../style/Home.css';

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
        <h1>TO DO</h1>
      </header>

      <section>
        <h3>Users list</h3>
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
      </section>
    </div>
  );
}

export default Home;
