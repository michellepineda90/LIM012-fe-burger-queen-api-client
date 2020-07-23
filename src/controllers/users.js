export const getEmployees = (token) => {
    return fetch('http://localhost:3000/users', {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        }
    })
    .then(response => (response.json()))
}

export const addEmployee = (token, data) => {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        }
    })
    .then(response => (response.json()))
}