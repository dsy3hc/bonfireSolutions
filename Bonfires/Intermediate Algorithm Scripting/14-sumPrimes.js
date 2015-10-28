function sumPrimes(num) {
  var sum=0;
  var primeList=[2];
  var checkPrime=false;
  for(var x=3;x<=num;x++){
    for(var y=2;y<x;y++){
      if(x%y==0)
        checkPrime=true;
    }
    if(checkPrime==true){
      checkPrime=false;
    }
    else{
      primeList.push(x);
    }
  }
  //reusing the code from the array.reduce tutorial
  sum = primeList.reduce(function(previousVal, currentVal){
   return previousVal+currentVal;
  });
  return sum;
}

sumPrimes(11);
