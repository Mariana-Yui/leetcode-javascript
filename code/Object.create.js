function People(name) {
    this.name = name
}
People.prototype.sayName = function() {
    console.log(this.name)
}

function Person(name, age) {
    this.age = age
    People.call(this, name)
}
Person.prototype = Object.create(People.prototype, {
    constructor: {
        value: Person
    }
})
Person.prototype.sayAge = function() {
    console.log(this.age)
}

const person = new Person('Yui', 23)
person.sayName()
person.sayAge()
console.log(Object.getPrototypeOf(person).constructor)
