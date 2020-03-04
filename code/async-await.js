function spawn(genFn) {
    return new Promise((resolve, reject) => {
        const gen = genFn()
        function step(nextFn) {
            let next
            try {
                next = nextFn()
            } catch (e) {
                return reject(e)
            }
            if (next.done) {
                return resolve(next.value)
            }
            // 即使用Promise.resolve，参数如果出错状态仍然是reject
            Promise.resolve(next.value).then(
                (v) => {
                    step(() => gen.next(v))
                },
                (e) => {
                    step(() => gen.throw(e)) // throw()迭代器抛出错误
                }
            )
        }

        step(() => gen.next(undefined))
    })
}

function* genFn() {
    console.log('1')
    const foo = yield 1
    console.log(foo + '1')
}

spawn(genFn)
