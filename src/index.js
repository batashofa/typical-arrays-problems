let res;
exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        res = 0;
    } else {
        res = Math.min(...array);
    }
    return res;
}


let res1;
exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    res1 = Math.max(...array);
    return res1;
}

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i] / array.length;
    }
    sum = sum + '';
    if (sum < 0 && sum.charAt(4) === '0') {
        +sum.match(/\-\d+\.\d{2}/g);
        return Math.round(sum * 10) / 10;

    } else {
        +sum.match(/\d+\.\d{2}/g);
        return Math.round(sum * 100) / 100;
    }
    return Math.round(sum * 10) / 10;
}


