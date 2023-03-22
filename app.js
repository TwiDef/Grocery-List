const items = document.querySelector('.items');
const submitBtn = document.querySelector('.submit');
const input = document.querySelector('input');
const removeBtn = document.querySelector('.removeBtn');

submitBtn.addEventListener('click', () => {
    const item = input.value;

    if (item) {
        items.insertAdjacentHTML('afterbegin', `<h2 class="item">- ${item}</h2>`);
    }
    input.value = '';
});

items.addEventListener('click', (e) => {
    if (e.target.classList.contains("item")) {
        e.target.classList.toggle('item-crossout');
    }
});

removeBtn.addEventListener('click', () => {
    document.querySelectorAll('.item').forEach(item => item.remove());
});