const box = document.getElementById('box');
box.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', 'dragging');
});
