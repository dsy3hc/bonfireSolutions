function palindrome(str) {
  var check = false;
  var plainStr= str.toUpperCase().replace(/[\W_]/g, '');
  var reverseStr= plainStr.split('').reverse().join('');
  if(plainStr==reverseStr){
    check = true;
  }
  return check;
}



palindrome("eye");