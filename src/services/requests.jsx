const methods = ['post', 'GET', 'PUT', 'DELETE'];

export async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: methods[1],
  });
  const data = await response.json();
  return { response, data };
}
