// 先micro再macro
console.log('1')
setTimeout(() => {
    console.log('2')
}, 1000)
new Promise((resolve, reject) => {
    console.log('3')
    resolve()
    setTimeout(() => {
        console.log('xx')
    }, 0)
    console.log('4')
}).then(() => {
    console.log('5')
})
console.log('6')
