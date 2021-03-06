exports.min = function min(numArr) {
  console.log("просто строка");
  if (numArr === undefined || numArr.length === 0) {
    return 0;
  } else {
    return Math.min.apply(null, numArr);
  }
};
exports.max = function max(numArr) {
  console.log("просто строка");
    if (numArr === undefined || numArr.length === 0) {
        return 0;
      } else {
    return Math.max.apply(null, numArr);
  };
};
exports.avg = function avg(numArr) {
  console.log("просто строка");
  if (numArr === undefined || numArr.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum = sum + numArr[i];
  };
  return sum / numArr.length;
};
