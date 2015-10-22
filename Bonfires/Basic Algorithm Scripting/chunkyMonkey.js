function chunk(arr, size) {
  // Break it up.
  var chunkSplit=arr.join('');
  var newChunk=[];
  var newChunk2="";
  for(var x = 0; x < arr.length; x){
    newChunk2=arr.slice(x,x+=size);
    newChunk.push(newChunk2);
  }
  return newChunk;
}

chunk(["a", "b", "c", "d"], 2);
