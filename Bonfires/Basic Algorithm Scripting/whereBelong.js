function where(arr, num) {
  // Find my place in this sorted array.
 // arr.push(num);
  arr.sort(function(a,b){return a - b});
  var index=0;
  if(num<=arr[0]){
    index =0;
  }
  else if(num>arr[arr.length-1]){
    index=arr.length;
  }
 else{ for(var x=0;x<arr.length;x++)
    if(arr[x]==num){
      index=x;
    }
    else if(x!=num.length&&arr[x]<num){
      if (arr[x+1]>num)
        index=x+1;
    }
     }
  return index;
}

where([2, 5, 10], 15);
