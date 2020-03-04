/* eslint-disable no-extend-native */
/**
 * 箭头函数没有this指针,使用call, apply第一个参数会被忽略
 */

Function.prototype.bind2 = function(context, ...args) {
    const self = this
    const boundFn = function(...argument) {
        // this instanceof boundFn如果为true说明是函数是用于实例化对象，故不改变上下文，
        // 如果只是单纯调用，this就会指向window或者global，这时候需要改变上下文
        return self.call(this instanceof boundFn ? this : context, ...args, ...argument)
    }
    boundFn.prototype = Object.create(self.prototype)
    return boundFn
}
function foo(name) {
    this.name = name
}
const bar = {
    name: 'rabbit'
}

foo.bind2(bar, 'dog')()

console.log(bar.name)
