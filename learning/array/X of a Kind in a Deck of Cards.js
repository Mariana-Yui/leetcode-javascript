export default (array) => {
    const map = new Map()
    array.forEach((el) => {
        map.set(el, map.get(el) ? map.get(el) + 1 : 1)
    })
    // 最大公约数
    const gcd = (a, b) => {
        return a === 0 ? b : gcd(b % a, a)
    }
    let res = 0
    for (const val of map.values()) {
        res = gcd(val, res)
    }

    return res > 1
}
