import sort from '../../learning/sort/select-sort'

test('选择排序', () => {
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
