const url = './api/people.json';
const btn = document.querySelector('.show-json');

// function displayData() {
//   fetch(url)
//     .then((resp) => {
//       // response object
//       // useful prop methods
//       // console.log(resp.json());
//       // convert response into JSON data
//       // returns promise
//       return resp.json();
//     })
//     .then((data) => {
//       const displayData = data
//         .map((item) => {
//           return `<p>${item.name}</p>`;
//         })
//         .join('');
//       const element = document.createElement('div');
//       element.innerHTML = displayData;
//       document.body.appendChild(element);
//     })
//     .catch((err) => console.log(err));
// }

function displayData() {
  fetch(url)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      const displayData = data
        .map((item) => {
          return `<p>${item.name}</p>`;
        })
        .join('');
      const element = document.createElement('div');
      element.innerHTML = displayData;
      document.body.appendChild(element);
    })
    .catch((err) => console.log(err));
}
btn.addEventListener('click', () => {
  displayData();
});
