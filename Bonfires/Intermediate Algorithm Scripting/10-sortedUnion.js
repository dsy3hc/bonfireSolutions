function unite(arr1, arr2, arr3) {
  var sort=[];
  
  for (var x=0;x<arguments.length;x++){
  //had to look up how to use the above line of code
    for (var y=0;y<arguments[x].length;y++){
      if(sort.indexOf(arguments[x][y])==-1){
        sort.push(arguments[x][y]);
      }
    }
  }
/*  
  for(var x=0;x<arr1.length;x++){
    sort.push(arr1[x]);
  }
  for(var y =0;y<arr2.length;y++){
    if(sort.indexOf(arr2[y])==-1){
      sort.push(arr2[y]);
    }
  }
  for(var z =0;z<arr3.length;z++){
    if(sort.indexOf(arr3[z])==-1){
      sort.push(arr3[z]);
    }
  }*/
  return sort;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
