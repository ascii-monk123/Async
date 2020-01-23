const http = new EasyHTTP();

//get users

//http.get('https://jsonplaceholder.typicode.com/users');

//post users
//user data
const data = {
  name: 'Aahan',
  username: 'John Doe',
  email: 'jdoe@gmail.com'
};

//create post
//http
//.post('https://jsonplaceholder.typicode.com/users', data)
//.then(data => console.log(data))
//.catch(err => console.log(err));

//PUT REQUEST

//http
//.put('https://jsonplaceholder.typicode.com/users/2', data)
//.then(data => console.log(data))
//.catch(err => console.log(err));

//delete request
http
  .delete('https://jsonplaceholder.typicode.com/users/2')
  .then(resp => console.log(resp))
  .catch(err => console.log(err));
