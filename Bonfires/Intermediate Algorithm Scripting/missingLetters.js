function fearNotLetter(str) {
  var charCode=[];
  var first =0;
  var end=0;
  var diff=undefined;
  for( var x=0;x<str.length;x++){
    charCode.push(str.charCodeAt(x));
  }
  first=charCode[0];
  end=charCode[0]+charCode.length;
  var index=0;
  for(var y=first;y<end;y++){
    if(charCode[index]!=y){
      diff=y;
      return String.fromCharCode(diff);
    }
    index++;
  }
  return diff;
  
}

fearNotLetter("abcdefghjklmno");
