function largestOfFour(arr) {
  var sum=0;
   var largest =0;
  var largestArray=[];
  for(var x=0;x<arr.length;x++){
    for(var y=0;y<arr[x].length;y++){
     if(arr[x][y]>largest){
      largest=arr[x][y];
     }
    }
    largestArray.push(largest);
    largest=0;
    }
  return largestArray;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
