const btn = document.getElementById('info');
const result = document.getElementById('result');
btn.onclick = () => {
    result.textContent = `width: ${window.innerWidth}, height: ${window.innerHeight}`;
};
