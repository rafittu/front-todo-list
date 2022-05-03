const methods = ['post', 'GET', 'PUT', 'DELETE'];

export async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: methods[1],
  });
  const data = await response.json();
  return { response, data };
}

export async function getTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: methods[1],
  });
  const data = await response.json();
  return { response, data };
}

export async function createTodo(todo) {
  const { userId, title, complete } = todo;

  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: methods[0],
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId,
      title,
      complete,
    }),
  });

  const data = await response.json();
  return { response, data };
}

export async function deleteTodo(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: methods[3],
  });
  const data = await response.json();
  return { response, data };
}
