const list = document.getElementById('list');
const btn = document.getElementById('btn');
let count = 1;
btn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'item ' + count++;
    list.appendChild(li);
});
