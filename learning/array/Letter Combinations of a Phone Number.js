export default (string) => {
    const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    const input = string.split('').map((num) => {
        return map[Number(num)]
    })

    const comb = (input) => {
        const tmp = []
        for (let i = 0, ilen = input[0].length; i < ilen; i++) {
            for (let j = 0, jlen = input[1].length; j < jlen; j++) {
                tmp.push(`${input[0][i]}${input[1][j]}`)
            }
        }
        input.splice(0, 2, tmp)

        if (input.length > 1) {
            comb(input)
        }
        return input[0]
    }

    return comb(input)
}
