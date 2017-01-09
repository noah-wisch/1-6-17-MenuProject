function showLunchItems(item) {

    let child = document.createElement('li');
    let parent = document.querySelector('#lunch ul');
    let template = document.querySelector('#lunchMenu');

    child.innerHTML = Mustache.render(template.innerHTML, {
        name: item.food,
        description: item.description,
        price: item.price,
    });
    parent.appendChild(child);
}

module.exports = showLunchItems;