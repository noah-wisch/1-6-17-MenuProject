module.exports = {
    // subjects is an array of strings
    show: function (subjects) {
        let parent = document.querySelector('#pokemon');

        subjects.forEach(function (pokemonName){
            let li = document.createElement('li');
            li.textContent = pokemonName;

            parent.appendChild(li);
        });
    },

};