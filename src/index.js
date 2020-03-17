exports.min = function min(array) {
    if (array !== undefined && array.length) {
        return Math.min(...array);
    }
    return 0
}

exports.max = function max(array) {
    if (array !== undefined && array.length) {
        return Math.max(...array)
    }
    return 0
}

exports.avg = function avg(array) {
    if (array !== undefined && array.length) {
        let amount = array.length;
        return (array.reduce((a, b) => a + b, 0)) / amount
    }
    return 0
}
