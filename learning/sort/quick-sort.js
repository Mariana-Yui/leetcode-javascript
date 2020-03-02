export default (array) => {
    const quickSort = (left, right) => {
        if (left >= right) return
        let i = left,
            j = right,
            tmp = array[left]
        while (i < j) {
            while (i < j && array[j] >= tmp) {
                j--
            }
            while (i < j && array[i] <= tmp) {
                i++
            }
            if (i < j) {
                let tmp2 = array[i]
                array[i] = array[j]
                array[j] = tmp2
            }
        }
        array[left] = array[i]
        array[i] = tmp

        quickSort(left, i - 1)
        quickSort(i + 1, right)
    }

    quickSort(0, array.length - 1)
    return array
}
