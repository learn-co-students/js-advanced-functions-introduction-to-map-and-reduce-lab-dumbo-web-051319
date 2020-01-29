const mapToNegativize = arr => arr.map(num => -num);
const mapToNoChange = arr => arr.map(num => num);
const mapToDouble = arr => arr.map(num => num * 2);
const mapToSquare = arr => arr.map(num => num ** 2);
const reduceToTotal = (arr, start = 0) => arr.reduce((tot, n) => tot + n) + start;
const reduceToAllTrue = arr => arr.reduce((tf,x) => tf == !!x);
const reduceToAnyTrue = arr => arr.reduce((tf,x) => !!x);
