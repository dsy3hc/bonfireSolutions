function drop(arr, func) {
  // Drop them elements.
  var whyIsShiftNotWorking=[]
  for(var x=0;x<arr.length;x++){
    if(func(arr[x])==true){
whyIsShiftNotWorking.push(arr[x]);
    }
  }

  return whyIsShiftNotWorking;
}

drop([1, 2, 3, 4], function(n) {return n >= 3; });
