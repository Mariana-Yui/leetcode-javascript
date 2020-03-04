/* eslint-disable no-tabs */
function* WeaponGenerator(action) {
    yield '1' + action
    yield '2'
    yield '3'
    yield* [1, 2, 3]
    yield* '1234'
}

const it = WeaponGenerator(0)
for (const y of it) {
    console.log(y)
}
/**
 * 10
	2
	3
	[ 1, 2, 3 ]
	1234
*/

// 数组，字符串可作为迭代器
// yield*可给迭代器迭代

const obj = { name: 'yui', age: 22 }
Object.defineProperty(obj, Symbol.iterator, {
    value() {
        const self = this
        const o = Object.keys(self)
        let index = 0
        return {
            next() {
                // done为false时迭代器会继续遍历
                return {
                    value: self[o[index++]],
                    done: index > o.length
                }
            }
        }
    }
})
for (const v of obj) {
    console.log(v)
}
