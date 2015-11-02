function every(collection, pre) {
  // Is everyone being true?
  var truthy=true;
  var nan=NaN;
  var a = isNaN(nan);
 // var t=isNan(nan);
  for(var x=0;x<collection.length;x++){
    //looks for ineligible values and sets them to 999
    var falsey=(collection[x][pre]||999);
    if(!collection[x].hasOwnProperty(pre)){
      truthy=false;
    }
    else if(falsey===999){
      truthy=false;
    }
    
  }
  return truthy;
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
