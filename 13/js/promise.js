new Promise(resolve => {
    setTimeout(() => resolve('완료'), 1000);
}).then(msg => {
    document.write(msg);
});
