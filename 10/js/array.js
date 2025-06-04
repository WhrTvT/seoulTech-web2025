const list = document.getElementById('list');
const arr = ['a', 'b', 'c'];
arr.push('d');
list.textContent = arr.join(', ');
