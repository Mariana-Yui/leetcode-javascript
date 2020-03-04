/* eslint-disable no-unused-vars */
/* eslint-disable accessor-pairs */
/* eslint-disable no-dupe-keys */
const obj = {
    name: 'yui',
    age: 21,
    get name() {
        console.log('getter被调用')
        return 'uzi'
    },
    set age(value) {
        console.log('setter被调用')
    }
}

obj.age = 22
console.log(obj.name)

class Foo {
    constructor(name) {
        this.name = name
    }

    get firstName() {
        console.log('getter被调用')
        return this.name
    }

    set firstName(value) {
        this.name = name
    }
}

function Bar() {
    let count = 0
    Object.defineProperty(this, 'skillLevel', {
        get: () => count,
        set: (value) => {
            count = value
        }
    })
}
