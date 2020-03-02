export default (string) => {
    return string
        .split(' ')
        .map((item) => {
            return item
                .split('')
                .reverse()
                .join('')
        })
        .join(' ')
}
