export default (string) => {
    if (/^(\w+)\1+$/.test(string)) {
        return true
    }
    return false
}
