function find(arr, func) {
  if(arr.some(func)!=true){
    return undefined;
  }
  else{
    for(var x=0;x<arr.length;x++){
      if(func(arr[x])===true)
        return arr[x];
    }
  }
 
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
