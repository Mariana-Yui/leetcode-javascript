/* eslint-disable no-proto */
function myInstanceof(instance, contructor) {
    let left = instance.__proto__
    const right = contructor.prototype
    while (true) {
        if (left === null) return false
        if (left === right) return true
        left = left.__proto__
    }
}

function People(name) {
    this.name = name
}
function Person(name, age) {
    this.age = age
    People.call(this, name)
}
Person.prototype = Object.create(People.prototype)

const person = new Person('yui', 21)
console.log(person instanceof People)
