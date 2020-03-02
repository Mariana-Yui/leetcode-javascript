import flower from '../../learning/array/605Can Place Flowers'

test('605Can Place Flowers', () => {
    expect(flower([0, 0, 1, 0, 0], 2)).toBe(true)
})

test('605Can Place Flowers2', () => {
    expect(flower([1, 0, 1, 0, 1], 2)).toBe(false)
})
