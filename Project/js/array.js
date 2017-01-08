
module.exports = {
    food: 'Bread and Milk Sammy',
    description: 'Its a delightful sandwich of soggy bread',
    price: 15.00,
},
{
    food: 'Lunch Beer (We dont judge)',
    description: 'Look, its 5 o clock somewhere',
    price: 5.00,
},
{
    food: 'Grilled Cheese with Turkey',
    description: 'Leo eats his grilled cheese this way',
    price: 8.00,
};

function showLunchItems(item) {
    // create a new <li>
    // populate it with Mustache template
    // add it to DOM

    let child = document.createElement('li');
    let parent = document.querySelector('#lunch ul');
    let template = document.querySelector('#lunchMenu');

    child.innerHTML = Mustache.render(template.innerHTML, {
        name: array.food,
        description: array.description,
        price: array.price,
    });
    parent.appendChild(child);
}

module.exports = showLunchItems;

