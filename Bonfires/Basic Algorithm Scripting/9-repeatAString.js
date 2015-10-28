function repeat(str, num) {
  // repeat after me
  var newStr=[];
  if(num<0)
    return "";
  else{
    for(var x=0;x<num;x++){
      newStr.push(str);
    }
    newStr=newStr.join('');
  }
  return newStr;
}

repeat("abc", 3);