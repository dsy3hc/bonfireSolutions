function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var check = false;
  var end2=str.split(' ');
  var end=str.split('');
   if(end.join('').substr(end.length-target.length,end.length)==target)
     check=true;

  return check;
}

end("He has to give me a new name", "name");
