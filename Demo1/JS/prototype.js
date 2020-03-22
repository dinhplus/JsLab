let person = (function() {

    let person = function(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.print = function() {
        console.log(this.name, this.age);
    }

    return person;
})();


array.sort();
array.join('');