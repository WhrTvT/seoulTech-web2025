document.getElementById('outer').addEventListener('click', () => {
    alert('outer div');
});

document.getElementById('inner').addEventListener('click', e => {
    alert('button');
    e.stopPropagation();
});
