Function.prototype.call2 = function(context, ...args) {
    context = context || global
    const key = Symbol()
    context[key] = this
    const result = context[key](...args)
    delete context[key]
    return result
}

Function.prototype.apply2 = function(context, args) {
    context = context || global
    const key = Symbol()
    context[key] = this
    const result = context[key](...args)
    delete context[key]
    return result
}

Function.prototype.bind2 = function(context, ...args) {
    const fn = this
    const bound = function(...argument) {
        return fn.apply(this instanceof bound ? this : context, [...args, ...argument])
    }
    bound.prototype = Object.create(fn.prototype)
    return bound
}

const obj = {
    name: 'yui'
}
global.name = 'uzi'

function test(name, age) {
    console.log(name, age)
    console.log(this.name)
}

test.call2(obj, 'yui', 21)
test()
test.apply2(obj, ['yui', 21])
