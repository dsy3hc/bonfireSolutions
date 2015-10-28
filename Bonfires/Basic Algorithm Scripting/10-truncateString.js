function truncate(str, num) {
  // Clear out that junk in your trunk
  var diff=0;
  
  if(str.length>num&&str.length>3){
    diff=str.length-num;
    if(diff>3){
      str=str.slice(0,num-3);
      str=str+"...";
      return str;
    }
    else{
      return str.slice(0,num-3);
    }
  }
  else if(str.length<=3&&str.length>num){
    str=str.slice(0,num);
      str=str+"...";
      return str;
  }
  else{
    return str;
  }
}

truncate("A-", 1);
