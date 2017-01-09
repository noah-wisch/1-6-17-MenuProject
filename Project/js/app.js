
//let hideThings = require('./hidden');

let lunchItems = require('./array')

let showLunchItems = require('./DOM')

window.addEventListener('load', function () {
    console.log('testing');
    showLunchItems(lunchItems);
    console.log(lunchItems);

});

window.addEventListener('click', function () {
    let parent = document.querySelector('#dinner ul');
    let child = document.createElement('li');
    document.querySelector('#btn').textContent.value;

    parent.appendChild('li');
});

// showLunchItems(function (foods) {
//     let menu = {
//         message: document.querySelector('#textbox').value,
//         //from: document.querySelector('#name').value,
//     }
// });

// addFood('click', function() {

// });

