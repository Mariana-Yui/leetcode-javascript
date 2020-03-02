export default (string) => {
    const res = []
    for (let i = 0, len = string.length; i < len - 1; i++) {
        const r = match(string.slice(i))
        if (r) {
            res.push(r)
        }
    }
    return res.length
}

function match(string) {
    const prefix = string.match(/^(0+|1+)/)[0]
    //prefix[0]取反,粗心写成prefix
    const suffix = (prefix[0] ^ 1).toString().repeat(prefix.length)
    const reg = new RegExp(`^${prefix}${suffix}`)
    if (reg.test(string)) {
        return prefix + suffix
    }
    return null
}
