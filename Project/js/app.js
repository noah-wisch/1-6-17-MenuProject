
//let hideThings = require('./hidden');

let lunchItems = require('./array')

let showLunchItems = require('./array')

window.addEventListener('load', function() {
    console.log('testing');
    showLunchItems(lunchItems)
});