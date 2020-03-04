const obj = { name: 'yui', age: 21 }

const proxy = new Proxy(obj, {
    get: (target, key) => {
        return key in target ? target[key] : '不存在该值'
    },
    set: (target, key, value) => {
        console.log('setter被调用')
        target[key] = value
    }
})

proxy.name = 'uzi'
proxy.school = 'dlut'
console.log(proxy)

/**
 * 1.日志记录
 * 2.set前校检
 * 3.数据双向绑定
 */
