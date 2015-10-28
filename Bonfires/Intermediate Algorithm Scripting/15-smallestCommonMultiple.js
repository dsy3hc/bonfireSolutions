function smallestCommons(arr) {
  var largest=Math.max(arr[0],arr[1]);
  var largest2=Math.max(arr[0],arr[1]);
  var smallest=Math.min(arr[0],arr[1]);
  var collection=[];
  var check=0;
  var scm=0;

  while(check!=largest){
    for(x=smallest;x<=largest;x++){
      if(largest2%x==0){
        check++;
      }
    }
    if(check!=largest){
      check=0;
      largest2++;
    }
    else{
      scm=largest2;
    }
  }
  return scm;
}


smallestCommons([1,13]);
