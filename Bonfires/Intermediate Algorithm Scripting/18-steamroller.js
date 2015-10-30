function steamroller(arr) {
  // I'm a steamroller, baby
  //looked up assistance from https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/bonfire-steamroller
  // for help on how to do this recursively
  var steam=[];
  var recurSteam=[];
  for (var x=0;x<arr.length;x++){
    if(Array.isArray(arr[x])!==true){
      steam.push(arr[x]);
    }
    else if(Array.isArray(arr[x])===true){
          recurSteam=steamroller(arr[x]);
      for(var y=0;y<recurSteam.length;y++){
        steam.push(recurSteam[y]);
      }
    }
  }
  return steam;
}

steamroller([1, {}, [3, [[4]]]]);
