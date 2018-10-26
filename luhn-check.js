function luhnCheck(num) {
  //from right to left, double value of every 2nd digit starting at 2nd to last
  //if result of doubling > 9, add digits of the product
  //sum all digits
  //if %10 === 0, number is valid
  var numArray = num.toString().split('').reverse();
  var sum = 0;
  numArray.forEach(function(x, index) {
    //only double every other
    if(index % 2 === 1) {
      //if double > 9, subtract 9
      if(Number(x) * 2 > 9) {
        sum += Number(x) * 2 - 9;
      } else {
        sum += Number(x) * 2;
      }
    } else {
      sum += Number(x);
    }
  });
  if(sum % 10 === 0) {
    return true;
  }
  return false;
}

module.exports = luhnCheck;