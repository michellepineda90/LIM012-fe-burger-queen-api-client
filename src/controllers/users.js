export const getEmployees = (token) => fetch('http://localhost:3000/users', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => (response.json()));

export const addEmployee = (token, data) => fetch('http://localhost:3000/users', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => (response.json()));

export const editEmployee = (token, data) => fetch(`http://localhost:3000/users/${data._id}`, {
  // TODO
  method: 'PUT',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => (response.json()));

export const deleteEmployee = (token, data) => fetch(`http://localhost:3000/users/${data._id}`, {
  method: 'DELETE',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => (response.json()));
