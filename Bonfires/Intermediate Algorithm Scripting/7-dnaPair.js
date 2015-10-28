function pair(str) {
  var splitStr=str.split('');
  var dna=[];
  for(var x =0;x<splitStr.length;x++){

    if(splitStr[x]=="A"){
          dna.push([splitStr[x],"T"]);
    }
    else if(splitStr[x]=="C"){
          dna.push([splitStr[x],"G"]);
    }
    else if(splitStr[x]=="G"){
          dna.push([splitStr[x],"C"]);
    }
    
    else if(splitStr[x]=="T"){
        dna.push([splitStr[x],"A"]);
    }
  }
  
 return dna;
}

pair("GCG");
