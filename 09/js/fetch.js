document.getElementById('btn').addEventListener('click', () => {
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            document.getElementById('result').textContent = JSON.stringify(data, null, 2);
        });
});
