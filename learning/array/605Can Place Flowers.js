export default (flower, n) => {
    //右边界问题
    flower.push(0)
    for (let i = 0, len = flower.length - 1; i < len; i++) {
        if (flower[i] === 0) {
            if (i === 0 && flower[i + 1] === 0) {
                n--
                i++
            } else if (flower[i - 1] === 0 && flower[i + 1] === 0) {
                n--
                i++
            }
        }
    }

    return n <= 0
}
