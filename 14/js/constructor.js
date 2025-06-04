function Person(name) {
    this.name = name;
}

Person.prototype.say = function() {
    document.write('안녕 ' + this.name);
};

const p = new Person('JS');
p.say();
