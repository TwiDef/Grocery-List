const items = document.querySelector('.items');
const submitBtn = document.querySelector('.submit');
const input = document.querySelector('input');

submitBtn.addEventListener('click', () => {
    const item = input.value;

    if (item) {
        items.insertAdjacentHTML('afterbegin', `<h2 class="item">- ${item}</h2>`);
    }
    input.value = '';
});

items.addEventListener('click', (e) => {
    if (e.target.classList.contains("item")) {
        e.target.classList.add('item-crossout');
    }
});

items.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains("item")) {
        e.target.remove();
    }
});