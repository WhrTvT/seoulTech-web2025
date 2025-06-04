const animal = {
    eats: true
};
const rabbit = Object.create(animal);
rabbit.jumps = true;
document.write('eats' in rabbit);
document.write('<br>');
document.write(rabbit.eats);
