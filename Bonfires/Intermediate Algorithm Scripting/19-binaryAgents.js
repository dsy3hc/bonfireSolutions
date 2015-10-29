function binaryAgent(str) {
  var splitStr=str.split(" ");
  var binaryString=[];
  var char="";
  for(var x=0;x<splitStr.length;x++){
    //looked up this mehtod to see how to get this to decimal
    char=parseInt(splitStr[x],2);
    binaryString.push(String.fromCharCode(char));
  }
  return binaryString.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
