const btn = document.getElementById('load');
btn.onclick = () => {
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            document.getElementById('result').textContent = JSON.stringify(data, null, 2);
        })
        .catch(err => console.error(err));
};
