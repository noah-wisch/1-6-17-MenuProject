/** 
 * Input list of pokemon from server
 * Output pokemon names as array
 */

function pokemonify(pokes) {
    return pokes.map(nameOnly)
}

function nameOnly(pokemon) {
    return pokemon.name[0].toUpperCase() + pokemon.name.slice(1).toLowerCase();
}

module.exports = pokemonify;
