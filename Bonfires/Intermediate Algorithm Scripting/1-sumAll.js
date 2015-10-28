function sumAll(arr) {
  if(arr[0] === arr[1]){
    return arr[0] + arr[1];
  }

  arr.sort(function(a, b){
    return a - b;
  });

  var total = [];
  for(var i = arr[0]; i <= arr[1]; i++){
    total.push(i);
  }

  total = total.reduce(function(a, b){
    return a + b;
  });

  return(total);
}

sumAll([1, 4]);
