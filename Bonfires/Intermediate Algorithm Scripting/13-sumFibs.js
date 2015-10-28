function sumFibs(num) {
  var fib=[0,1];
  var check=0;
  var counter=1;
  var odds=[1];
  var oddSum=0;
  if(num==1){
    return 1;
  }
  while(num>check){
    check=fib[counter]+fib[counter-1]
    if(check<=num){
      fib.push(check);
    }
    counter++;
    if(check%2!=0&&check<=num){
      odds.push(check);
    }
  }
  //reusing array.reduce tutorial code
  oddSums = odds.reduce(function(previousVal, currentVal){
    return previousVal+currentVal;
  });
  return oddSums;
}

sumFibs(4);
