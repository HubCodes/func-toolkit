module.exports = function zip(iterable1, iterable2) {
  let arr1 = [];
  let arr2 = [];
  let combined = [];
  for (const element of iterable1) {
    arr1.push(element);
  }
  for (const element of iterable2) {
    arr2.push(element);
  }
  for (let i = 0; i < arr1.length && i < arr2.length; i += 1) {
    combined.push([arr1[i], arr2[i]]);
  }
  return combined;
};
