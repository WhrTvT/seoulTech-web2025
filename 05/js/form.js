const form = document.getElementById('frm');
form.addEventListener('submit', e => {
    e.preventDefault();
    alert(document.getElementById('name').value);
});
