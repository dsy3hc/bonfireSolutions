function findLongestWord(str) {
  var longest = 0;
  var splitStr= str.split(" ");
  for (var x=0;x<splitStr.length;x++){
    if(splitStr[x].length>longest)
      longest=splitStr[x].length;
  }return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");