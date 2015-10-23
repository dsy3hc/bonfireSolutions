function mutation(arr) {
  var first=arr[0].toLowerCase();
  var second=arr[1].toLowerCase();
  var check= true;
  for (var x=0;x<second.length;x++){
    if(first.indexOf(second[x])==-1)
      check=false;
  }
  return check;
}

mutation(["hello", "hey"]);