//yes yes i know this is not optimal. will fix this soon
function translate(str) {
  str=str.split('');
  var vowels=["a","e","i","o","u"];
  var check=false;
  for(var x=0;x<vowels.length;x++){
    if(str[0]==vowels[x])
      check=true;
  }
 if(check==true){
   str.push('w');
   str.push('a');
   str.push('y');
   
 }
  else{
    while (check==false){
      str.push(str[0]);
      str.shift();
      for(var x=0;x<vowels.length;x++){
    if(str[0]==vowels[x])
      check=true;
  }
    }
str.push('a');
    str.push('y');
    
  }
  return str.join('');
}

translate("consonant");
