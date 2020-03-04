const log = console.log.bind(console)
// Boolean + Boolean
log(true - true)
// Boolean + Number
log(true + 1)
// Object + Number/String/Boolean, Object调用toString()
log([1, 2, 3] + 1)
log([1, 2, 3] + '1')
log([1, 2, 3] + true)
log([1, 2, 3] + { a: 1 })
// String和其余任何类型都会进行连接
log('1' + true)
log('1' + { a: 1 })
// 其余运算符统统转换为数值
log(true * [])
log([1, 2, 3] - 2)
