export default (array) => {
    const result = []
    for (let i = 0, len = array.length, odd = 1, even = 0; i < len; i++) {
        if (array[i] % 2 === 0) {
            result[even] = array[i]
            even += 2
        } else {
            result[odd] = array[i]
            odd += 2
        }
    }
    return result
}
