// //this is for the basic understanding

// async function getUsers() {
//   //await response of the fetch call
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');

//   //we only proceed once the above promise has been resolved
//   const data = await response.json();
//   //we proceed only after the above promise has been resolved and we get the json string
//   return data; //this is returned as a Json string
// }

// getUsers().then(data => console.log(data));

const http = new HTTP();

//make the get request
// http
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data));

//make the post request

const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
};

// http
//   .post('https://jsonplaceholder.typicode.com/users', data)
//   .then(res => console.log(res));

//make the put request

// http
//   .put('https://jsonplaceholder.typicode.com/users/5', data)
//   .then(res => console.log(res));

//make the delete request

http
  .delete('https://jsonplaceholder.typicode.com/users/10')
  .then(res => console.log(res));
