function convert(num) {
  //using the below code with hints from https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/bonfire-roman-numeral-converter 
 var romanChars=["I","IV","V", "IX","X","XL", "L", "XC", "C", "CD", "D", "CM", "M "];
 var values = [1,4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  //end of assisted code
 var romanNum=[];
 for(var x=values.length-1; x>=0;x--){
   while(num>=values[x]){
     romanNum.push(romanChars[x]);
     num=num-values[x];
   }
 }
  var romanString=romanNum.join("");
  return romanString;
}

convert(36);
