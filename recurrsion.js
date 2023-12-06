//Alternative implementation of power using RECURSION
function powr(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * powr(base, exponent - 1);
    }
}
console.log(`2 to the power 3 is ${powr(2, 3)}`);

// Example of RECURSION solution
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
            find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}
console.log(findSolution(24));