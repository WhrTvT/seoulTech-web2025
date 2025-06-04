const btn = document.getElementById('call');
btn.onclick = () => {
    fetch('https://api.publicapis.org/entries')
        .then(res => res.json())
        .then(data => {
            document.getElementById('output').textContent = data.count;
        })
        .catch(err => console.error(err));
};
