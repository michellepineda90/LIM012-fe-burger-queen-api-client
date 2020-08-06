const url = 'http://localhost:3000/auth';

export default (data) => fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
        'Content-type': 'application/json'
    },
}).then((response)=> {
    switch (response.status) {
        case 200:
            return response.json();
        case 400:
            throw new Error('You have not provided a valid email and or password');
        default:
            break;
    }
})
