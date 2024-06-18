function removeRepetition (str) {
  let result = '';
  if (str != '') {
    result = str[0];
    for (let i = 1; i < str.length; i++) {
      if (str[i] !== str[i - 1]) {
        result += str[i];
      }
    }
  }
  return result;
}
console.log(removeRepetition('aabbcc'))