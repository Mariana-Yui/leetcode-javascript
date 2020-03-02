import X from '../../learning/array/X of a Kind in a Deck of Cards'

test('X of a Kind in a Deck of Cards', () => {
    expect(X([1, 2, 3, 4, 4, 3, 2, 1])).toBe(true)
})

test('X of a Kind in a Deck of Cards 2', () => {
    expect(X([1, 1, 1, 2, 2, 2, 3, 3])).toBe(false)
})

test('X of a Kind in a Deck of Cards 3', () => {
    expect(X([1])).toBe(false)
})

test('X of a Kind in a Deck of Cards 4', () => {
    expect(X([1, 1])).toBe(true)
})
