//get local text file
const getText = () => {
  fetch('main.txt')
    .then(response => response.text())
    .then(data => (document.getElementById('output').innerHTML = data))
    .catch(err => console.log(err));
};

document.getElementById('button1').addEventListener('click', getText);

//local json data
const getJson = () => {
  fetch('posts.json')
    .then(response => response.json())
    .then(data => {
      let output = '';
      data.forEach(ele => {
        output += `<li>${ele.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
};

document.getElementById('button2').addEventListener('click', getJson);
