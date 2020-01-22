const getJokes = e => {
  e.preventDefault();
  const number = document.querySelector('input[type="number"]').value;
  if (number !== '' && number !== null && number !== undefined) {
    const xhr = new XMLHttpRequest();
    xhr.open(
      'GET',
      `	
  http://api.icndb.com/jokes/random/${number}`,
      true
    );
    xhr.onload = function() {
      if (this.status === 200) {
        const data = JSON.parse(this.responseText);
        console.log(data);
        const jokesArr = data.value.map(ele => {
          return `<li>${ele.joke}</li>`;
        });
        const markUp = jokesArr.join('');
        document
          .querySelector('.jokes')
          .insertAdjacentHTML('afterbegin', markUp);
      }
    };
    xhr.error = function() {
      console.log('I got an error');
    };

    xhr.send();
  }
};

document.querySelector('.get__jokes').addEventListener('click', getJokes);
