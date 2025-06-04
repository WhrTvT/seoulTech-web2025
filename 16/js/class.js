class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        document.write('Hello ' + this.name);
    }
}

new Person('World').greet();
