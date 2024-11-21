const url = './api/people.json';

function getData(url) {
  const xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.open('GET', url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const displayData = data
        .map((item) => {
          return `
          <h1>${item.job}</h1>
          <p>${item.name}</p>`;
        })
        .join('');
      const element = document.createElement('div');
      element.innerHTML = displayData;
      document.body.appendChild(element);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };
  xhr.send();
}

const btn = document.querySelector('.show-text');
btn.addEventListener('click', () => {
  getData(url);
});
