function myReplace(str, before, after) {
  var strSplit = str.split(' ');
  var index=0;
  var check=before.toLowerCase();
  index = strSplit.indexOf(before);
  if(check==before)
    check=after;
  else{
    check=after.split('');
    check[0]=check[0].toUpperCase();
    check=check.join('');
  }
    strSplit.splice(index,1,check);
  
    
  
 return strSplit.join(' ');
  
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
