const obj = { a: 1, b: 2, c: 3 };
const result = document.getElementById('result');
result.textContent = Object.keys(obj).map(k => `${k}:${obj[k]}`).join('\n');
