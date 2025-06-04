const list = document.getElementById('list');
document.getElementById('btn').addEventListener('click', () => {
    if(list.firstChild) list.removeChild(list.firstChild);
});
