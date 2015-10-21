function titleCase(str) {
  var sentence = str.toLowerCase().split(' ');
for(var x= 0;x<sentence.length;x++){
 // sentence[x]=sentence[x][0].toUpperCase();
  sentence[x]= sentence[x].replace(sentence[x].charAt(0),sentence[x].charAt(0).toUpperCase());
}
  var titleCase= sentence.join(' ');
  return titleCase;
}

titleCase("I'm a little tea pot");