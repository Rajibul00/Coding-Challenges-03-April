function addNumbers(a, b) {
    console.log(myVar); // Outputs: undefined
    var myVar = a + b; // Variable declaration is hoisted, but it's initialized as undefined
    console.log(myVar); // Outputs the actual sum of a and b
    return myVar;
  }
  
  addNumbers(5, 7);
  