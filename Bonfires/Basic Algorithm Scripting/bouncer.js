function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function valid (valid){
    return Boolean(valid);
  }
  return arr.filter(valid);
}

bouncer([7, "ate", "", false, 9]);