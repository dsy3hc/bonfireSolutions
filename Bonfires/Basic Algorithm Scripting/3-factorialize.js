function factorialize(num) {
  var x=num;
  if(num==0)
    return 1;
  else{
  while(num>1){
    x=x*(num-1);
    num--;
  }
  return x;
  }
}

factorialize(5);
