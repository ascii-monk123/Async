//declaring a promise
const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([1500, 1980, 2015, 1500]);//Always successfull as set timeout is bound to happen,so we use resolve in this case,which contains the result we want to return in case the promise is successfull.
  }
    , 1500)
});




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


async function getPromisesAw() {
  const ID = await getIDs;
  console.log(ID);
  const recipe = await getRecipe(ID[2]);
  console.log(recipe);
  const recipe2 = await getRecipe2('Jonas');
  console.log(recipe2);
  //Now we return a resolved promise from the async function
  return recipe;//This contains the value of the resolved promise,so we will use it
}
getPromisesAw().then(result => console.log(`${result} is here `));
//Now this console.logs at the end because it's simple ,the function returns at the end of its statement ,so we return the result at the end of the function
//Now this happens because the function returns a promise with the resolve value of recipe.So the recipe containes a resolved value but the function returns here the promise which is giving its resolve value to the recipe constant


