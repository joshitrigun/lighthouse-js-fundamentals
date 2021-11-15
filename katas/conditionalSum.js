const conditionalSum = (values, condition) => {
    let sum=0;
    let mod = condition === 'odd' ? 1: 0;
    for(let value of values){
        if(value % 2 === mod)
        sum += value;
    }
    return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], 'even'));
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd'));
console.log(conditionalSum([13, 88, 12, 44, 99], 'even'));
console.log(conditionalSum([], 'odd'));