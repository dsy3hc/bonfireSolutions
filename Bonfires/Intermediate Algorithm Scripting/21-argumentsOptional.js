function add() {
  var sum=0;
    var firstVar = arguments[0];

  if(arguments.length>1){
    if(typeof arguments[0] != 'number'||typeof arguments[1]!='number'){
      return undefined;
    }
    else{
      sum= arguments[0]+arguments[1];
    }
  }
  else if(arguments.length==1){
    if(typeof arguments[0]!='number'){
      return undefined;
    }
    else{
      
      sum= function(add2){
        if(typeof arguments[0]!='number'|| typeof add2 !='number'){
          return undefined;
        }
        else{
          return firstVar+add2;
        }
      };
    }
  }
  return sum;
}

add(2)(3);
