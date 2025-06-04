fetch('data.json')
    .then(res => res.json())
    .then(data => {
        document.getElementById('json').textContent = JSON.stringify(data);
    });
