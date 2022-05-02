import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as requests from '../services/requests';

function Todo() {
  const { id } = useParams();
  const [userTodo, setUserTodo] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const getTodos = async () => {
      const { response, data } = await requests.getTodos();
      if (response.status !== 200) return response;

      const todo = data.filter((task) => task.userId === Number(id));
      setUserTodo(todo);

      return setIsLoading('false');
    };
    getTodos();
  }, []);

  console.log(userTodo, isLoading);

  return (
    <h1>Todo</h1>
  );
}

export default Todo;
