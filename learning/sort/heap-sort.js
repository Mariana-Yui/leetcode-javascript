export default (array) => {
    const swap = (i, j) => {
        let tmp = array[i]
        array[i] = array[j]
        array[j] = tmp
    }
    const max_heapify = (start, end) => {
        let dad = start
        let son = 2 * dad + 1
        // 这里>=处理边界问题
        if (son >= end) return
        if (son + 1 < end && array[son] < array[son + 1]) {
            son++
        }
        if (array[dad] < array[son]) {
            swap(dad, son)
            max_heapify(son, end)
        }
    }

    const len = array.length
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        max_heapify(i, len)
    }
    for (let i = len - 1; i >= 0; i--) {
        swap(0, i)
        max_heapify(0, i)
    }
    return array
}
