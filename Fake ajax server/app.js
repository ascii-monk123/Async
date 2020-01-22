const http = new easyHTTP();

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
