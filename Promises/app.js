
//declaring a promise
const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([1500, 1980, 2015, 1500]);//Always successfull as set timeout is bound to happen,so we use resolve in this case,which contains the result we want to return in case the promise is successfull.
  }
    , 1500)
});


//Now using the promise object.then method which has a callback in case the promise is sucessfull,which in this case is always true 
getIDs.then(ids => {
  console.log(ids);
  return getRecipe(ids[2]);//since we return a promise here by calling this function,it prevents callback hell
})
  .then(recipe => {
    console.log(recipe);
    return getRecipe2('Jonas');
  })
  .then(recipe => {
    console.log(recipe);
  })

//Thee argument inside the then method is always the result of ther returned value of the resolve in this case

//now to create a new promise which returns the recipe based on the id passed

const getRecipe = (ID) => {
  return new Promise((resolve, reject) => {
    setTimeout((id) => {
      const recipe = {
        title: 'Fresh Tomato Pasta',
        publisher: 'Jonas'
      }
      resolve(`${id}  ${recipe.title}  ${recipe.publisher}`);//we are returining a string in the case the promise is fulfilled
    }, 1500, ID)
  })
}


//now to get another recipe based on the auhthor

const getRecipe2 = (publisher) => {

  return new Promise((resolve, reject) => {
    setTimeout(pub => {
      const recipe = {
        title: 'Italian Pizza',
        id: 1098
      }
      resolve(`${recipe.id}  ${recipe.title}   ${pub}`);
    }, 1500, publisher);
  })


}



