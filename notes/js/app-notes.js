
// let ajax = {
//     get: function (url, show) {
//         let request = new XMLHttpRequest();
//         request.open('GET', url);
//         request.addEventListener('load', function () {
//             let response = JSON.parse(request.responseText);
//             // console.log(response);

//             show(response);
//         });
//         request.send();
//     },
//     post: function () {

//     },
// };

// function showBooks(info) {
//     console.log(info);
// }
// window.addEventListener('load', function () {
//     ajax.get('http://api.queencityiron.com/books', showBooks);
//     ajax.post();
// });

let monies = require('./currency');
console.log(monies);