function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  for(x=0;x<arr2.length;x++){
    if(arr1.indexOf(arr2[x])==-1){
      newArr.push(arr2[x]);
    }
  }
  for(x=0;x<arr1.length;x++){
    if(arr2.indexOf(arr1[x])==-1){
      newArr.push(arr1[x]);
    }
  }
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
