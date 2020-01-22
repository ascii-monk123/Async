//getting only a single data from a json file
const getPerson = e => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customer.json', true);
  xhr.onload = function() {
    if (this.status === 200) {
      const personData = JSON.parse(this.responseText);
      const markup = `
      <ul>
      <li>ID :${personData.id}</li>
      <li>Name: ${personData.name}</li>
      <li>Age: ${personData.age}</li>
      <li>Company : ${personData.company}</li>
      </ul>
      `;
      document.querySelector('#div1').innerHTML += markup;
    }
  };

  xhr.send();
};
//getting multiple data from a json file
const getPersons = e => {
  const xhr2 = new XMLHttpRequest();
  xhr2.open('GET', 'customers.json', true);
  xhr2.onload = function() {
    if (this.status === 200) {
      const personData2 = JSON.parse(this.responseText);

      let markup = ``;
      personData2.forEach(ele => {
        markup += `
        <ul>
        <li>ID :${ele.id}</li>
        <li>Name: ${ele.name}</li>
        <li>Age: ${ele.age}</li>
        <li>Company : ${ele.company}</li>
        </ul>
        `;
      });

      document.querySelector('#div2').innerHTML += markup;
    }
  };
  xhr2.send();
};

document.querySelector('#button1').addEventListener('click', getPerson);
document.querySelector('#button2').addEventListener('click', getPersons);
