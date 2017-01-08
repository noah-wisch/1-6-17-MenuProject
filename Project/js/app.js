
//let hideThings = require('./hidden');

let lunchItems = require('./array')

let showLunchItems = require('./DOM')

window.addEventListener('load', function() {
    console.log('testing');
    showLunchItems(lunchItems);
    console.log(showLunchItems);
    console.log(lunchItems);
});