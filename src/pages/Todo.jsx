import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as requests from '../services/requests';
import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';

import '../style/Todo.css';

function Todo() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState();
  const [userTodo, setUserTodo] = useState([]);
  const [completedTodo, setCompletedTodo] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const { response, data } = await requests.getTodos();
      if (response.status !== 200) return response;

      const todo = data.filter((task) => task.userId === Number(id));
      setUserTodo(todo);
      setCompletedTodo(todo);

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

  const updateTodo = async (taskId) => {
    const todo = {
      id: taskId,
      completed: 'true',
    };

    const { response, data } = await requests.updateTodo(todo);
    if (response.status !== 200) return response;
    const todos = completedTodo.filter((task) => task.completed);

    return setCompletedTodo([...todos, data]);
  };

  const deleteTodo = async (taskId) => {
    const { response } = await requests.deleteTodo(taskId);
    if (response.status !== 200) return response;
    const todos = userTodo.filter((task) => task.id !== Number(taskId));

    return setUserTodo(todos);
  };

  return (
    <main id="todo-page">
      <h1>Tasks to do!</h1>

      <section id="todo-body">
        <AddTask addTodo={addTodo} />

        <ul id="todo-list">
          {
            !isLoading
              ? 'Carregando...'
              : userTodo.map((todo) => (
                <Tasks
                  id={todo.id}
                  key={todo.id}
                  title={todo.title}
                  updateTodo={updateTodo}
                  deleteTodo={deleteTodo}
                />
              ))
          }
        </ul>
      </section>
    </main>
  );
}

export default Todo;
