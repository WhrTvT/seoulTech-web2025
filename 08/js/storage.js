const saveBtn = document.getElementById('save');
const loadBtn = document.getElementById('load');
const result = document.getElementById('result');

saveBtn.onclick = () => {
    localStorage.setItem('msg', 'Hello Storage');
};

loadBtn.onclick = () => {
    result.textContent = localStorage.getItem('msg');
};
