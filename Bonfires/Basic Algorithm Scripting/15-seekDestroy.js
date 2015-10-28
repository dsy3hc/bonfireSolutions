function destroyer(arr) {
  // Remove all the values
  
  var first=arguments[0];
  var rest=[]
  for(var x=1;x<arguments.length;x++){
    rest.push(arguments[x]);
  }
  function contains(value){
      if (rest.indexOf(value) == -1) {
      return true;
    } else {
      return false;
    }
  }
  return arr.filter(contains);
    
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
