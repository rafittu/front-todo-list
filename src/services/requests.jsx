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
