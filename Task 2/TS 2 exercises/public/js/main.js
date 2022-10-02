var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.group('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    var sortDrinksByPriceASC_1 = function (drink1, drink2) {
        return drink1.price - drink2.price;
    };
    var solution = function (drinks) {
        return __spreadArray([], drinks, true).sort(sortDrinksByPriceASC_1);
    };
    var drinks = [
        { name: "lemonade", price: 50 },
        { name: "fanta", price: 30 },
        { name: "lime", price: 10 },
    ];
    var sortedDrinks = solution(drinks);
    console.log({
        drinks: drinks,
        sortedDrinks: sortedDrinks
    });
}
console.groupEnd();
console.group('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    var solution = function (itemObj, itemName, itemValue) {
        var _a;
        return (__assign(__assign({}, itemObj), (_a = {}, _a[itemName] = itemValue, _a)));
    };
    var solutionArgs1 = [{}, "Brutus", 300];
    var solutionArgs2 = [{ piano: 500 }, "Brutus", 400];
    var solutionArgs3 = [{ piano: 500, stereo: 300 }, "Caligula", 440];
    var result1 = solution.apply(void 0, solutionArgs1);
    var result2 = solution.apply(void 0, solutionArgs2);
    var result3 = solution.apply(void 0, solutionArgs3);
    console.log(solutionArgs1, result1);
    console.log(solutionArgs2, result2);
    console.log(solutionArgs3, result3);
}
console.groupEnd();
