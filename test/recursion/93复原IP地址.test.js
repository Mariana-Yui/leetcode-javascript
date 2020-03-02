import recursion from '../../learning/recursion/93.复原ip地址'

test('复原IP地址', () => {
    expect(recursion('25525511135')).toEqual(['255.255.11.135', '255.255.111.35'])
})

test('复原IP地址2', () => {
    expect(recursion('010010')).toEqual(['0.10.0.10', '0.100.1.0'])
})
