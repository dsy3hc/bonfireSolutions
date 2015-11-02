function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
    
   str = str.split(/(?=[A-Z])/);
  str = str.join(' ');
   str = str.replace(/([-_ ])/g, '-');
  str=str.replace(/--/g,'-');
 
  return str.toLowerCase();
}

spinalCase("The_Andy_Griffith_Show");
