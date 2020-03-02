import sort from '../../learning/sort/heap-sort'

test('堆排序', () => {
    expect(sort([13, 15, 37, 89, 60, 39, 12, 109, 56, 72])).toEqual([
        12,
        13,
        15,
        37,
        39,
        56,
        60,
        72,
        89,
        109
    ])
})

test('堆排序2', () => {
    expect(sort([5, 9, 1, 9, 5, 3, 7, 6, 1])).toEqual([1, 1, 3, 5, 5, 6, 7, 9, 9])
})
