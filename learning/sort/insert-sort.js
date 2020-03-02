export default (array) => {
    for (let i = 1, len = array.length; i < len; i++) {
        let j, k
        for (j = i - 1; j > 0; j--) {
            if (array[j] < array[i]) {
                k = j + 1
                break
            }
        }
        for (j = i; j > k; j--) {
            array[j] = array[j - 1]
        }
        array[k] = array[i]
    }
    return array
}
