function deepCopy(target, cache = new WeakMap()) {
    if (target === null || typeof target !== 'object') {
        return target
    }
    if (cache.get(target)) {
        return target
    }
    const copy = Array.isArray(target) ? [] : {}
    cache.set(target, copy)
    Object.keys(target).forEach((key) => {
        copy[key] = deepCopy(target[key], cache)
    })
    return copy
}

var baz = {
    h: foo
}
var foo = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    },
    f: null,
    g: [1, 2, 3, 4, 5],
    h: undefined,
    i: baz
}

const bar = deepCopy(foo)

bar.b.c = 5
bar.g.push(6)
console.log(JSON.stringify(bar))
console.log(JSON.stringify(foo))
