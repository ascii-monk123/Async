const getRequest = () => {
  console.log('I am inside');
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'doc.txt', true);
  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);
    }
  };
  //xhr.onreadystatechange = function() {
  //if (this.status === 200 && this.readyState === 4) {
  console.log(this.responseText);
  //}
  //};
  xhr.send();
};

document.querySelector('.button').addEventListener('click', getRequest);
