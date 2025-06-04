const btn = document.getElementById('random');
const num = document.getElementById('number');
btn.onclick = () => {
    num.textContent = Math.floor(Math.random() * 100);
};
