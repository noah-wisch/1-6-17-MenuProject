/**
 * Build a basic pokemon app that gets 'mon
 * You can click a catch button and they are caught
 * 
 * One module for AJAX requests in general
 * One module for making our Pokemon objects from the response
 * One module for ('pokedom) that does Poke realted DOM manipulation
 */

let ajax = require('./ajax'); // general purpose ajax request module
let pokemonify = require('./pokemonify'); // convert mon api objects to our mon objects
let pokedom = require('./pokedom'); // show our mon objects in the DOM

window.addEventListener('load', function () {
    console.log('test');
    ajax.get('http://pokeapi.co/api/v2/pokemon/', showPokemon);
});

// Pokemonify the response then render it to the DOM
function showPokemon(response) {
    let pokemon = pokemonify(response.results);
    // ['bulbasaur', 'ivysaur', ...]
    //console.log(pokemon);

    // does not work rn
    pokedom.show(pokemon);
}
