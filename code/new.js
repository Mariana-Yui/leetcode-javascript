/**
 * new 实现
 */
function create(cons, ...args) {
    const obj = {}
    Object.setPrototypeOf(obj, cons.prototype)
    const result = cons.apply(obj, args)
    return result instanceof Object ? result : obj
}

function Test(name, age) {
    this.name = name
    this.age = age
}

Test.prototype.getName = function() {
    console.log(this.name)
}

const test = create(Test, 'Yui', 23)

test.getName()
