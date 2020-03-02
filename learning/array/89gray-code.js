export default (num) => {
    const gray = (num) => {
        if (num === 1) {
            return [0, 1]
        } else {
            const prev = gray(num - 1)
            const result = []
            const max = Math.pow(2, num) - 1
            for (let i = 0, len = Math.pow(2, num) / 2; i < len; i++) {
                result[i] = `0${prev[i]}`
                result[max - i] = `1${prev[i]}`
            }
            return result
        }
    }

    return gray(num).map((item) => {
        return parseInt(item, 2)
    })
}
