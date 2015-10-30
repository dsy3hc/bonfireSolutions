function convert(str) {
  // &colon;&rpar;
//  var splitStr=str.split("");
//  for(var x=0;x<splitStr.length;x++){
//    if(split)
//  }
  return  str.replace(/\&/g, "&amp;").replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g,'&apos;');
}

convert("Shindler's List");
