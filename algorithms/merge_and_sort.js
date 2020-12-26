function mergeAndSort(a1, a2) {
  var matchCount = 0;
  var ret = [];

  for (var i = 0; i < a1.length; i++) {
    var val = a2[matchCount];
    if (a1[i] > val) {
      ret.push(val)
      matchCount++
      i--;
      continue;
    }
    if (a1[i] > 0) {
      ret.push(a1[i]);
    }
  }
  console.log(ret.join())
  return ret;
}


var arrayOne = [3, 6, 11, 15, 23, 34, 42]
var arrayTwo = [7, 19, 38];

mergeAndSort(arrayOne, arrayTwo)
