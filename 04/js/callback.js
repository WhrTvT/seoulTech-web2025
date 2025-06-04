function greet(name, callback) {
    const message = 'Hello, ' + name;
    callback(message);
}

function display(text) {
    document.write(text);
}

greet('JavaScript', display);
