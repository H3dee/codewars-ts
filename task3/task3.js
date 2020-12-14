//Поменять местами наибольший и наименьший элементы массива.
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var swap = function (arr) {
    var unique = __spreadArrays(new Set(arr));
    var max = Math.max.apply(Math, unique);
    var min = Math.min.apply(Math, unique);
    return arr.map(function (number) {
        if (number === min)
            return min;
        if (number === max)
            return max;
    });
};
console.log(swap([1, 2, 3]));
