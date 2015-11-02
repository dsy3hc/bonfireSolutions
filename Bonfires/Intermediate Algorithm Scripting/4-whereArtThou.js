function where(collection, source) {
  var arr = [];
  var lastName=Object.keys(source);
  // What's in a name?
  for (var x=0;x<collection.length;x++){
    if (lastName.length==1){
      if(collection[x][lastName]===source[lastName]){
        arr.push(collection[x]);
      }
      
    }
    else{
      for(var y=0;y<lastName.length-1;y++){
      if(collection[x][lastName[y]]===source[lastName[y]]&&collection[x][lastName[y+1]]===source[lastName[y+1]]){
        arr.push(collection[x]);
      }
      }
    }
    
  }
  return arr;
}

where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) ;
