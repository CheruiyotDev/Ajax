const url = './api/people.json';

const btn = document.querySelector('.show-json');

btn.addEventListener('click', () => {
  fetch(url)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      displayItems(data);
    })
    .catch((err) => console.log(err));
});

async function displayItems(items) {
  const displayData = items
    .map((item) => {
      const { name } = item;
      return `<p>${name}</p>`;
    })
    .join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
}
