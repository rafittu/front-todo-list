import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as requests from '../services/requests';
import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';

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

  const addTodo = async (task) => {
    const todo = {
      userId: Number(id),
      title: task,
      complete: 'false',
    };

    const { response, data } = await requests.createTodo(todo);
    if (response.status !== 201) return response;
    return setUserTodo([...userTodo, data]);
  };

  return (
    <div>
      <h1>Tasks to do!</h1>

      <div>
        <AddTask addTodo={addTodo} />

        {
        !isLoading
          ? 'Carregando...'
          : userTodo.map((todo) => (
            <Tasks id={todo.id} key={todo.id} title={todo.title} />
          ))
        }
      </div>
    </div>
  );
}

export default Todo;
