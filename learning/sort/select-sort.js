export default (array) => {
    for (let i = 0, len = array.length; i < len; i++) {
        let k = i
        for (let j = i + 1; j < len; j++) {
            if (array[k] > array[j]) {
                k = j
            }
        }
        if (k !== i) {
            let tmp = array[i]
            array[i] = array[k]
            array[k] = tmp
        }
    }
    return array
}
