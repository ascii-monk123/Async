const http = new easyHTTP();
/*
//get posts
http.get('http://jsonplaceholder.typicode.com/posts', function(
  error,
  response
) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});
*/

//create data

const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};
/*
//ADD POST
http.post('http://jsonplaceholder.typicode.com/posts', data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});
*/
/*
//UPDATE POST
http.put('http://jsonplaceholder.typicode.com/posts/5', data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});
*/

//DELETE POSTS

http.delete('http://jsonplaceholder.typicode.com/posts/1', function(
  error,
  response
) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});
